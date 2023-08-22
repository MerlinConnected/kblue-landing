import React from 'react'
import { useGLTF, Float } from '@react-three/drei'

export function Windows(props) {
	const { nodes, materials } = useGLTF('/windows.glb')

	return (
		<group {...props} dispose={null}>
			<Float rotationIntensity={0} floatIntensity={0.2} speed={0.2} floatingRange={[1, 3]}>
				<mesh castShadow receiveShadow geometry={nodes.Window01.geometry}>
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
					<meshToonMaterial color={'#3054e5'} />
				</mesh>
			</Float>
			<Float rotationIntensity={0} floatIntensity={0.14} speed={0.5} floatingRange={[1, 2.4]}>
				<mesh castShadow receiveShadow geometry={nodes.Window04.geometry}>
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
