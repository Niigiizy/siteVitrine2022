import { Canvas, useFrame, useLoader, extend, useThree,  Camera } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { 
    OrbitControls, 
    PerspectiveCamera, 
    PositionalAudio, 
    CubeCamera, 
    Environment, 
    useGLTF, 
    useScroll, 
    Scroll, 
    ScrollControls, 
    Cloud, 
    Sparkles, 
    Stars, 
    Plane ,
    MeshWobbleMaterial,
    ScrollControlsState
} from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Affiche } from './affiche';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { DDSLoader } from 'three-stdlib';
import { Euler, Vector3 } from 'three'
import { useSpring, animated } from '@react-spring/three'
import { id_afficher_actualisation } from '../../store/slice/globalSlice'
// import { useAppSelector } from '../../hooks/hook_redux'

interface PropsListAffiche {
    images: string[],
    dispatch: any,
    rootReducer: any
}

export const ListAffiche = (props: PropsListAffiche) => {

    const { images } = props
    const { width } = useThree((state) => state.viewport)
    const { dispatch } = props;
    const { rootReducer } = props;
    const id_affiche_selectionner: number = rootReducer.global.id_affiche_selectionner
    const count_img = images.length
    const width_initial = 1
    const gap = 0.15
    const pos_x = width_initial + gap
    const rayon = 2

    const group_ref = useRef<THREE.Group>(null!)

    const [mouvement, set_mouvement] = useState(false)
    const [scale_window, set_scale_window] = useState(true)

    const { value } = useSpring({ value: mouvement ? 0 : 1, config: { mass: 3, tension: 300, friction: 50, precision: 0.0001 } })
    const { scale } = useSpring({ scale: scale_window ? 1 : 0.9, config: { mass: 3, tension: 300, friction: 50, precision: 0.0001 } })
    const { rotation } = useSpring({ rotation: scale_window ? 1 : 0.9, config: { mass: 3, tension: 300, friction: 50, precision: 0.0001 } })
    
    const scroll: any = useScroll()

    useFrame(({ clock }) => {
        if (group_ref.current) {
            if (window.innerWidth < 900) {
                set_scale_window(true)
            } else {
                set_scale_window(false)
            }
            if (id_affiche_selectionner === -1) {
                group_ref.current.rotation.y = scroll.scroll.current * 2 * Math.PI + Math.PI / 2
            }
        }
        
    })

    useEffect(() => {
        dispatch(id_afficher_actualisation(-1))
    },[])

    return (
            <animated.group 
                ref={group_ref} 
                scale={scale} 
                rotation={[0,0,0]}
                position={new Vector3(0,0,0)}
            >
                {
                    images.map( (image, i) => 
                        <Affiche 
                            url_img={image} 
                            position={[
                                rayon * Math.cos( (2 / images.length) * i * Math.PI ),
                                0,
                                rayon * Math.sin( (2 / images.length) * i * Math.PI )
                            ]} 
                            rotation={Math.PI}
                            id={i}
                            count_img={count_img}
                            {...props}
                        />
                    )
                }
                <axesHelper args={[5]} />
            </animated.group>
    )

}