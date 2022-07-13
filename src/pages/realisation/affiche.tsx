import { useScroll, MeshWobbleMaterial, Text } from "@react-three/drei";
import { 
    ThreeEvent,
    useFrame, 
    useLoader, 
    useThree, 
    // Vector3,
} from "@react-three/fiber"
import { Ref, useEffect, useRef, useState } from "react";
import { BufferGeometry, DoubleSide, Material, Mesh, PlaneGeometry, TextureLoader, Vector3 } from "three"
import { useSpring, animated } from '@react-spring/three'
// import { useAppDispatch, useAppSelector } from "../../hooks/hook_redux";
import { id_afficher_actualisation } from "../../store/slice/globalSlice";
import { useDispatch } from "react-redux";
import { TextBufferGeometry } from "three-stdlib";

interface PropsAffiche {
    url_img: string,
    position: number[],
    rotation: number,
    id: number,
    count_img: number,
    dispatch: any,
    rootReducer: any
}

export const Affiche = (props: PropsAffiche) => {

    const { url_img } = props;
    const { position } = props;
    const { rotation } = props;
    const { id } = props;
    const { count_img } = props;
    const { dispatch } = props;
    const { rootReducer } = props;
    const id_affiche_selectionner: number = rootReducer.global.id_affiche_selectionner

    const [click, set_click] = useState<boolean>(false)

    const ref = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(null!);
    const material = useRef<JSX.IntrinsicElements['wobbleMaterialImpl']>(null!);
    const plane_ref = useRef<PlaneGeometry>(null!)

    const scroll: any = useScroll()
    const { width } = useThree((state) => state.viewport)

    const { value_x } = useSpring({
        value_x: 
            click ? 
            (0.01 * position[0]) * Math.cos( - scroll.scroll.current * 2 * Math.PI + id * (Math.PI * 2 / count_img) ) + (0.01 * position[2]) * Math.sin( - scroll.scroll.current * 2 * Math.PI + id * (Math.PI * 2 / count_img) )
            : 
            position[0],
        config: { mass: 1, tension: 400, friction: 50, precision: 0.0001 }
    })

    const { value_z } = useSpring({
        value_z: 
            click ? 
            - (0.01 * position[0]) * Math.sin( - scroll.scroll.current * 2 * Math.PI + id * (Math.PI * 2 / count_img) ) + (0.01 * position[2]) * Math.cos( - scroll.scroll.current * 2 * Math.PI + id * (Math.PI * 2 / count_img) ) 
            : 
            position[2],
        config: { mass: 1, tension: 400, friction: 50, precision: 0.0001 }
    })
    
    useEffect(() => {
        if (ref.current !== undefined && ref.current !== null  ) {
            ref.current.position.x = position[0]
            ref.current.position.y = position[1]
            ref.current.position.z = position[2]
            ref.current.rotateY(rotation)
        }
    }, [])
    
    useEffect(() => {
        if (id_affiche_selectionner !== -1 && id_affiche_selectionner !== id) {
            if (ref.current) {
                ref.current.visible = false
            }
        } else {
            if (ref.current) {
                ref.current.visible = true
            }
        }
    }, [id_affiche_selectionner])

    useEffect(() => {
        console.log("root reducer dans affiche : ", id_affiche_selectionner);
    }, [id_affiche_selectionner])
    
    useFrame(({ clock }) => {
        const delta = scroll.delta
        ref.current?.lookAt(new Vector3(0,0,0))
    })

    const image_message_okeys = useLoader(TextureLoader, url_img)

    const handle_enter = (e: ThreeEvent<PointerEvent>) => {
        plane_ref.current?.scale(1.1,1.1,1)
    }

    const handle_out = (e: ThreeEvent<PointerEvent>) => {
        plane_ref.current?.scale(0.9,0.9,0.9)
    }

    const handle_click = (e: ThreeEvent<MouseEvent>) => {
        console.log("visibilité : ",ref.current?.visible)
        if (id_affiche_selectionner !== -1) {
            if(ref.current?.visible) {
                dispatch(id_afficher_actualisation(-1))
                set_click(!click)
            }
        } else {
            ref.current?.rotateY(rotation)
            dispatch(id_afficher_actualisation(id))
            set_click(!click)
        }
    }

    return (
        <>
            <animated.mesh 
                visible 
                ref={ref} 
                onPointerEnter={handle_enter}
                onPointerOut={handle_out}
                onClick={handle_click}
                position-x={value_x}
                position-z={value_z}
            >
                <planeBufferGeometry ref={plane_ref} args={[0.5, 1]} />
                <meshStandardMaterial map={image_message_okeys} side={DoubleSide} />
            </animated.mesh>
            {
                id_affiche_selectionner === id ?
                <Text
                    color={'#EC2D2D'}
                    fontSize={12}
                    maxWidth={200}
                    lineHeight={1}
                    letterSpacing={0.02}
                    textAlign={'left'}
                    font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                    anchorX="center"
                    anchorY="middle"
                >
                    essai
                </Text>
                : 
                null
            }
        </>

    )
    
}