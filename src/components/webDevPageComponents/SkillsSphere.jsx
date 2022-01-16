import React, { useRef, Suspense } from 'react';
import * as THREE from 'three' 
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three';

import CSSLogo from '../../img/techIcons/CSS.png'
import DOMLogo from '../../img/techIcons/DOM.png'
import ExpressLogo from '../../img/techIcons/Express.png'
import FirebaseLogo from '../../img/techIcons/Firebase.png'
import GitHubLogo from '../../img/techIcons/GitHub.png'
import HerokuLogo from '../../img/techIcons/Heroku.png'
import HTMLLogo from '../../img/techIcons/HTML.png'
import JestLogo from '../../img/techIcons/Jest.png'
import JSLogo from '../../img/techIcons/JS.png'
import NodeJSLogo from '../../img/techIcons/NodeJS.png'
import npmLogo from '../../img/techIcons/npm.png'
import PostgreSQLLogo from '../../img/techIcons/PostgreSQL.png'
import ReactLogo from '../../img/techIcons/React.png'
import SQLLogo from '../../img/techIcons/SQL.png'

const Box = (props) => {
    const mesh = useRef()
    const [map] = useLoader(TextureLoader, [props.texture])


    return (
      <mesh {...props} ref={mesh}>
        <planeGeometry args={[1, 1]} />
        <meshLambertMaterial attach="material" map={map} transparent={true} opacity='1' side={THREE.DoubleSide}  />
      </mesh>
    )
  }

const LogosGroup = () => {
    const m = 1.5;
    const group = useRef()
    useFrame((state, delta) => ([
        group.current.rotation.y += 0.002, 
        group.current.rotation.z *= 0
    ]))

    return (
        <>
            <group ref={group}>
                <Box position={[-1*m, -1*m, -1*m]} texture={CSSLogo} />
                <Box position={[-1*m, 1*m, -1*m]} texture={DOMLogo}/>
                <Box position={[1*m, 1*m, -1*m]} texture={ExpressLogo}/>
                <Box position={[1*m, -1*m, -1*m]} texture={FirebaseLogo}/>

                <Box position={[-1*m, -1*m, 1*m]} texture={GitHubLogo}/>
                <Box position={[-1*m, 1*m, 1*m]} texture={HerokuLogo}/>
                <Box position={[1*m, 1*m, 1*m]} texture={HTMLLogo}/>
                <Box position={[1*m, -1*m, 1*m]} texture={JestLogo}/>

                <Box position={[-Math.sqrt(3)*m, 0*m, 0*m]} texture={JSLogo}/>
                <Box position={[0*m, Math.sqrt(3)*m, 0*m]} texture={NodeJSLogo}/>
                <Box position={[Math.sqrt(3)*m, 0*m, 0*m]} texture={npmLogo}/>
                <Box position={[0*m, -Math.sqrt(3)*m, 0*m]} texture={PostgreSQLLogo}/>

                <Box position={[0*m, 0*m, Math.sqrt(3)*m]} texture={ReactLogo}/>
                <Box position={[0*m, 0*m, -Math.sqrt(3)*m]} texture={SQLLogo}/> 
            </group>
        </>
    )
}

const SkillsSphere = () => {
    

    return (
        <div id='skills-sphere-container'>
                <Canvas>
                    <Suspense fallback={null}>
                        <>
                            <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} panSpeed={0.5} />
                            <ambientLight />
                            <pointLight position={[10, 10, 10]} intensity='0'/>
                            <LogosGroup/>
                        </>
                    </Suspense>
                </Canvas>
        </div>
    );
};

export default SkillsSphere;