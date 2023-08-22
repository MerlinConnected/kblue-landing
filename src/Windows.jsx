import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Float } from '@react-three/drei'
import { useControls } from 'leva'

export function Windows(props) {
	const { nodes, materials } = useGLTF('/windows.glb')

	const { ...config } = useControls({
		backside: true,
		backsideThickness: { value: 0.44, min: 0, max: 2 },
		samples: { value: 4, min: 1, max: 1024, step: 1 },
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
			<Float rotationIntensity={0} floatIntensity={0.2} speed={0.2} floatingRange={[1, 3]}>
				<mesh castShadow receiveShadow geometry={nodes.Window01.geometry}>
					{/* <MeshTransmissionMaterial
						backside
						backsideThickness={0.44}
						samples={4}
						resolution={1024}
						transmission={1}
						clearcoat={0.1}
						clearcoatRoughness={0}
						thickness={0.45}
						chromaticAberration={0}
						anisotropy={0}
						roughness={0.45}
						distortion={0}
						ior={0.4}
						color={'#3F65FC'}
						gColor={'#ffffff'}
						shadow={'#ffffff'}
					/> */}
					{/* <MeshTransmissionMaterial {...config} /> */}
					<meshToonMaterial color={'#3054e5'} />
				</mesh>
			</Float>
			<Float rotationIntensity={0} floatIntensity={0.1} speed={0.75} floatingRange={[1, 1.5]}>
				<mesh castShadow receiveShadow geometry={nodes.Window02.geometry}>
					<meshToonMaterial color={'#2854ff'} />
				</mesh>
			</Float>
			<Float rotationIntensity={0} floatIntensity={0.5} speed={1} floatingRange={[1, 2]}>
				<mesh castShadow receiveShadow geometry={nodes.Window03.geometry}>
					{/* <MeshTransmissionMaterial
						backside
						backsideThickness={0.44}
						samples={4}
						resolution={1024}
						transmission={1}
						clearcoat={0.1}
						clearcoatRoughness={0}
						thickness={0.45}
						chromaticAberration={0}
						anisotropy={0}
						roughness={0.45}
						distortion={0}
						ior={0.4}
						color={'#3F65FC'}
						gColor={'#ffffff'}
						shadow={'#ffffff'}
					/> */}
					<meshToonMaterial color={'#3054e5'} />
				</mesh>
			</Float>
			<Float rotationIntensity={0} floatIntensity={0.14} speed={0.5} floatingRange={[1, 2.4]}>
				<mesh castShadow receiveShadow geometry={nodes.Window04.geometry}>
					{/* <MeshTransmissionMaterial
						backside
						backsideThickness={0.44}
						samples={4}
						resolution={1024}
						transmission={1}
						clearcoat={0.1}
						clearcoatRoughness={0}
						thickness={0.45}
						chromaticAberration={0}
						anisotropy={0}
						roughness={0.45}
						distortion={0}
						ior={0.4}
						color={'#3F65FC'}
						gColor={'#ffffff'}
						shadow={'#ffffff'}
					/> */}
					<meshToonMaterial color={'#2854ff'} />
				</mesh>
			</Float>
			<Float rotationIntensity={0} floatIntensity={0.15} speed={0.5} floatingRange={[1, 2.5]}>
				<mesh castShadow receiveShadow geometry={nodes.Window05.geometry}>
					<meshToonMaterial color={'#3F65FC'} />
				</mesh>
			</Float>
		</group>
	)
}

useGLTF.preload('/windows.glb')
