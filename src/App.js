import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import Door from '../src/Door';
import './App.css'

import { OrbitControls } from "@react-three/drei";


export default function App(){
  return(
    <Canvas>
      <OrbitControls/>
      <ambientLight intensity={10}/>
      <directionalLight intensity={1}/>
      <Suspense fallback={null}>
        <Door />
      </Suspense>
    </Canvas>
  )
}