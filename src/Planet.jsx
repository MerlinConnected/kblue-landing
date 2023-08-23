import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Planet(props) {
	const ref = useRef()
	const { nodes } = useGLTF('/planet.glb')

	useFrame((state, delta) => (ref.current.rotation.y += delta / 4))
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.PlanetWindow03.geometry} position={[2.787, 1.685, -2.313]}>
				<meshToonMaterial color={'#2854ff'} />
			</mesh>
			<mesh castShadow receiveShadow geometry={nodes.PlanetWindow02.geometry} position={[-2.182, -1.161, 1.475]}>
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
			<mesh castShadow receiveShadow geometry={nodes.PlanetWindow01.geometry} position={[-2.299, 0.36, -1.471]}>
				<meshToonMaterial color={'#3F65FC'} />
			</mesh>
			<group ref={ref}>
				{/* OCEAN */}
				<mesh castShadow receiveShadow geometry={nodes.Mesh001.geometry}>
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
				{/* LAND */}
				<mesh castShadow receiveShadow geometry={nodes.Mesh001_1.geometry}>
					<meshPhysicalMaterial color={'#ffffff'} roughness={0} clearcoat={1} clearcoatRoughness={0} />
				</mesh>
			</group>
		</group>
	)
}

useGLTF.preload('/planet.glb')
