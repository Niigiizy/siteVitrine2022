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
    MeshWobbleMaterial,
    Text,
    Float
} from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { useSpring, animated } from '@react-spring/three'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            axisHelper: object,
            orbitControls: any
        }
    }
} 

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

export const SceneHome = (props: any) => {

    const onWindowResize = (e: UIEvent) => {

        console.log("event dans scene principal : ", e)
    
    }

    const axes_ref = useRef<THREE.AxesHelper>(null!)

    return (
        <Canvas
            shadows={true}
            className='canvas'
        >
            <Float floatIntensity={5} speed={2}>
                <Text>
                    essai
                </Text>
            </Float>
            <mesh>
                <shapeBufferGeometry/>
            </mesh>
            <OrbitControls   />
            <axesHelper args={[5]} ref={axes_ref} />
            <ambientLight intensity={0.8} />
        </Canvas>
    )
}