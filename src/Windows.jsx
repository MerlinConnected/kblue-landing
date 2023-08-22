import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
	const { nodes, materials } = useGLTF('/windows.glb')
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Cube.geometry} />
		</group>
	)
}

useGLTF.preload('/windows.glb')
