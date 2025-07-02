import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Head2(props) {
  const { nodes, materials } = useGLTF('/models/head2.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.34}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0.05, 3.917, -2.07]} rotation={[-1.528, 0, 0]} scale={[0.358, 0.366, 0.358]}>
            <mesh geometry={nodes['se4_british_commando_hat_0_Material_#229_0'].geometry} material={materials.Material_229} position={[0.599, -0.375, -178.4]} />
          </group>
          <mesh geometry={nodes['skin_med_Material_#230_0'].geometry} material={materials.Material_230} position={[-0.005, 0.367, -0.446]} rotation={[-1.18, 0, 0]} scale={0.039} />
          <mesh geometry={nodes.teethLower_Texture3_0.geometry} material={materials.Texture3} position={[-0.027, 0.367, -0.446]} rotation={[-1.18, 0, 0]} scale={0.039} />
          <mesh geometry={nodes.teethUpper_Texture4_0.geometry} material={materials.Texture4} position={[-0.005, 0.367, -0.446]} rotation={[-1.18, 0, 0]} scale={0.039} />
          <mesh geometry={nodes.tongue_Texture5_0.geometry} material={materials.Texture5} position={[-0.005, 0.367, -0.446]} rotation={[-1.18, 0, 0]} scale={0.039} />
          <mesh geometry={nodes['Sphere001_Material_#228_0'].geometry} material={materials.Material_228} position={[1.24, 1.135, 1.285]} scale={[1.245, 1, 1]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/head2.glb')
