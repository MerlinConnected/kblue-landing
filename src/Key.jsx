import React, { useRef } from 'react'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'

export default function Key(props) {
	const { nodes, materials } = useGLTF('/Key.glb')

	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Rounded_Key.geometry}>
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
		</group>
	)
}

useGLTF.preload('/Key.glb')
