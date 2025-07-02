import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Head1(props) {
  const { nodes, materials } = useGLTF('/models/head1.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.CharacterModel001_Material001_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.CharacterModel001_Hair_Color_0.geometry} material={materials.Hair_Color} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/head1.glb')
