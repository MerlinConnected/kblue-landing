import React, { useRef } from 'react'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { RGBELoader } from 'three-stdlib'
import { useLoader } from '@react-three/fiber'
import { useControls } from 'leva'

export default function Key(props) {
	const { nodes, materials } = useGLTF('/Key.glb')
	const texture = useLoader(
		RGBELoader,
		'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr'
	)

	const { ...config } = useControls({
		backside: true,
		backsideThickness: { value: 0.44, min: 0, max: 2 },
		samples: { value: 128, min: 1, max: 1024, step: 1 },
		resolution: { value: 1024, min: 64, max: 2048, step: 64 },
		transmission: { value: 1, min: 0, max: 1 },
		clearcoat: { value: 1, min: 0.1, max: 1 },
		clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
		thickness: { value: 0.35, min: 0, max: 5 },
		chromaticAberration: { value: 0, min: 0, max: 5 },
		anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
		roughness: { value: 0.48, min: 0, max: 1, step: 0.01 },
		distortion: { value: 4, min: 0, max: 4, step: 0.01 },
		distortionScale: { value: 0.4, min: 0.01, max: 1, step: 0.01 },
		temporalDistortion: { value: 0.03, min: 0, max: 1, step: 0.01 },
		ior: { value: 1.76, min: 0, max: 2, step: 0.01 },
		color: '#737dd8',
		gColor: '#ffffff',
		shadow: '#ffffff',
	})

	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry}>
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
				{/* <MeshTransmissionMaterial {...config} /> */}
			</mesh>
		</group>
	)
}

useGLTF.preload('/Key.glb')
