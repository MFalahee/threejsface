import * as React from 'react';
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = React.useRef()
  const { nodes, materials } = useGLTF('./Assets/facemodel/scene.gltf', {
    
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[65.1, 443.57, 229.63]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={132.49}>
            <mesh geometry={nodes.hair006_hair001_0.geometry} material={materials['hair.001']} />
          </group>
          <group position={[0, 13.03, 41.79]} scale={13.59}>
            <mesh geometry={nodes.face_retopo013_skin_0.geometry} material={materials.skin} />
            <mesh geometry={nodes.face_retopo013_hair001_0.geometry} material={materials['hair.001']} />
            <mesh geometry={nodes.face_retopo013_Material_0.geometry} material={materials.Material} />
          </group>
          <group position={[112.34, 153.59, 106.69]} rotation={[-Math.PI / 2, 0, 0]} scale={82.04}>
            <mesh geometry={nodes.eyeBallL007_sclera_cornea_0.geometry} material={materials.sclera_cornea} />
            <mesh geometry={nodes.eyeBallL007_iris_0.geometry} material={materials.iris} />
          </group>
          <group position={[0, 174.64, 237.93]} scale={17.82}>
            <mesh geometry={nodes.eyebrows007_eyebrows_0.geometry} material={materials.eyebrows} />
          </group>
          <group position={[0, 171.07, 312.98]} scale={13.59}>
            <mesh geometry={nodes.eye_lashes007_eyebrows_0.geometry} material={materials.eyebrows} />
          </group>
          <group position={[-109.07, 153.59, 106.69]} rotation={[-Math.PI / 2, 0, 0]} scale={82.04}>
            <mesh geometry={nodes.eyeBallR007_sclera_cornea_0.geometry} material={materials.sclera_cornea} />
            <mesh geometry={nodes.eyeBallR007_iris_0.geometry} material={materials.iris} />
          </group>
          <group position={[0.07, -91.61, 177.31]} rotation={[0.41, 0, 0]} scale={244.02}>
            <mesh geometry={nodes.Figure_5_node003_Figure_5_geometry003_Teeth_0.geometry} material={materials.Teeth} />
            <mesh geometry={nodes.Figure_5_node003_Figure_5_geometry003_Gums_0.geometry} material={materials.Gums} />
          </group>
          <group position={[0, -104.25, 147.5]} rotation={[0.39, 0, 0]} scale={244.02}>
            <mesh geometry={nodes.Figure_5_node002_Figure_5_geometry004_Gums_0.geometry} material={materials.Gums} />
            <mesh geometry={nodes.Figure_5_node002_Figure_5_geometry004_Tongue_0.geometry} material={materials.Tongue} />
          </group>
          <group position={[0.02, -117.69, 167.67]} rotation={[0.13, 0, 0]} scale={244.02}>
            <mesh geometry={nodes.Figure_5_node000_Figure_5_geometry004_Teeth_0.geometry} material={materials.Teeth} />
            <mesh geometry={nodes.Figure_5_node000_Figure_5_geometry004_Gums_0.geometry} material={materials.Gums} />
          </group>
          <group position={[0, 13.03, 41.79]} scale={13.59}>
            <mesh geometry={nodes.face_retopo012_skin_0.geometry} material={materials.skin} />
            <mesh geometry={nodes.face_retopo012_hair001_0.geometry} material={materials['hair.001']} />
            <mesh geometry={nodes.face_retopo012_Material_0.geometry} material={materials.Material} />
          </group>
          <group position={[112.34, 153.59, 106.69]} rotation={[-Math.PI / 2, 0, 0]} scale={82.04}>
            <mesh geometry={nodes.eyeBallL006_sclera_cornea_0.geometry} material={materials.sclera_cornea} />
            <mesh geometry={nodes.eyeBallL006_iris_0.geometry} material={materials.iris} />
          </group>
          <group position={[0, 174.64, 237.93]} scale={17.82}>
            <mesh geometry={nodes.eyebrows006_eyebrows_0.geometry} material={materials.eyebrows} />
          </group>
          <group position={[0, 171.07, 312.98]} scale={13.59}>
            <mesh geometry={nodes.eye_lashes006_eyebrows_0.geometry} material={materials.eyebrows} />
          </group>
          <group position={[-109.07, 153.59, 106.69]} rotation={[-Math.PI / 2, 0, 0]} scale={82.04}>
            <mesh geometry={nodes.eyeBallR006_sclera_cornea_0.geometry} material={materials.sclera_cornea} />
            <mesh geometry={nodes.eyeBallR006_iris_0.geometry} material={materials.iris} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
