import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Color, MeshBasicMaterial } from 'three'

export default function Door(props) {
  const { nodes, materials } = useGLTF('/door.glb')
  const material = new MeshBasicMaterial({
    color: 'white',
    opacity: 0.5
  })

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.doorHandle_0.geometry} material={materials.Material} position={[-0.001, 0.554, 1.109]} scale={0.055} />
        <mesh geometry={nodes.Door_0.geometry} material={material} position={[-0.027, 0, 1.258]} />
        <mesh geometry={nodes.Door_0.geometry} material={materials['Material.001']} position={[-0.027, 0, 1.258]} />
      </group>
    </group>
  )
}

useGLTF.preload('/door.glb')

