import React from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'

export default function Markup(props) {
	const { nodes } = useGLTF('/markup.glb')
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Markup_1.geometry}>
				<MeshTransmissionMaterial
					backside
					backsideThickness={0.44}
					samples={128}
					resolution={1024}
					transmission={1}
					clearcoat={0.1}
					clearcoatRoughness={0}
					thickness={1.85}
					chromaticAberration={0}
					anisotropy={0.3}
					roughness={0.3}
					distortion={0}
					distortionScale={0}
					temporalDistortion={0}
					ior={1.5}
					color={'#ffffff'}
				/>
			</mesh>
			<mesh castShadow receiveShadow geometry={nodes.MarkupWindow03.geometry} position={[1.405, -1.058, 1.36]}>
				<MeshTransmissionMaterial
					backside
					backsideThickness={0.44}
					samples={64}
					resolution={64}
					transmission={1}
					clearcoat={0.1}
					clearcoatRoughness={0}
					thickness={0.45}
					roughness={0.45}
					ior={0.4}
					color={'#3F65FC'}
				/>
			</mesh>
			<mesh castShadow receiveShadow geometry={nodes.MarkupWindow02.geometry} position={[2.041, 0.914, -1.756]}>
				<MeshTransmissionMaterial
					backside
					backsideThickness={0.44}
					samples={64}
					resolution={64}
					transmission={1}
					clearcoat={0.1}
					clearcoatRoughness={0}
					thickness={0.45}
					roughness={0.45}
					ior={0.4}
					color={'#3F65FC'}
				/>
			</mesh>
			<mesh castShadow receiveShadow geometry={nodes.MarkupWindow01.geometry} position={[-2.523, 0.471, -0.516]}>
				<MeshTransmissionMaterial
					backside
					backsideThickness={0.44}
					samples={64}
					resolution={64}
					transmission={1}
					clearcoat={0.1}
					clearcoatRoughness={0}
					thickness={0.45}
					roughness={0.45}
					ior={0.4}
					color={'#3F65FC'}
				/>
			</mesh>
		</group>
	)
}

useGLTF.preload('/markup.glb')
