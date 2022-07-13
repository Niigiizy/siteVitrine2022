import { Canvas, useFrame, useLoader, extend, useThree, Camera } from '@react-three/fiber'
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
    MeshWobbleMaterial
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
import { ListAffiche } from './list_affiche'
import { Vector3 } from 'three'
import { useSpring, animated } from '@react-spring/three'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

declare global {
    namespace JSX {
        interface IntrinsicElements {
            axisHelper: object,
            orbitControls: any
        }
    }
} 

const images: string[] = [
    'message_okeys.jpg',
    'prestation_esthe.jpg',
    'prise_rdv.jpg',
    'qr_code.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg',
    'agenda.jpg'
]

    // const image_message_okeys = useLoader(TextureLoader, 'message_okeys.jpg')
    // const prestation_okeys = useLoader(TextureLoader, 'prestation_esthe.jpg')
    // const prise_rdv_okeys = useLoader(TextureLoader, 'prise_rdv.jpg')
    // const qr_code = useLoader(TextureLoader, 'qr_code.jpg')
    // const agenda = useLoader(TextureLoader, 'agenda.jpg')

    const Cam = () => {

        const perspectiveCamera = useRef<Camera>()


        return (
            <PerspectiveCamera
                makeDefault
                ref={perspectiveCamera}
                position={[0,0,1]} 
                fov={80}
            />
        )

    }

export const SceneCanvas = (props: any) => {

    const onWindowResize = (e: UIEvent) => {

        console.log("event dans scene principal : ", e)
    
    }

    useEffect(() => {
        console.log("props scene : ", props)
    }, [])

    const axes_ref = useRef<THREE.AxesHelper>(null!)

    useEffect(() => {
        window.addEventListener( 'resize', onWindowResize);
        axes_ref.current?.setColors(new THREE.Color( 'black' ),new THREE.Color( 'skyblue' ),new THREE.Color( 'green' ))
    },[axes_ref.current])

    return (
        <Canvas
            shadows={true}
            className='canvas'
        >
            <ScrollControls
                pages={5} 
                horizontal={true} 
                infinite={true}
            >
                <Cam/>
                <ListAffiche images={images} {...props} />
            </ScrollControls>
            {/* <OrbitControls   /> */}
                <axesHelper args={[5]} ref={axes_ref} />
            <ambientLight intensity={0.8} />
        </Canvas>
    )
}

