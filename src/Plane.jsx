import { useAnimations, useGLTF, useScroll, ScrollControls, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Suspense, useEffect } from 'react'
import * as THREE from 'three'

export default function Plane() {
	return (
		<Suspense fallback={null}>
			<ScrollControls pages={1}>
				<Animate />
			</ScrollControls>
		</Suspense>
	)
}

//Animation logic
function Animate({ ...props }) {
	const group = useRef()

	const scroll = useScroll()
	const { nodes, animations } = useGLTF('/plane.glb')
	const { actions } = useAnimations(animations, group)

	useEffect(() => {
		void (actions['PlaneAction'].play().paused = true)
	}, [actions])

	useFrame((state, delta) => {
		const action = actions['PlaneAction']
		const offset = 1 - scroll.offset

		action.time = THREE.MathUtils.damp(action.time, action.getClip().duration * offset, 100, delta)

		state.camera.lookAt(0, 0, 0)
	})

	const albedo = useTexture('/tex/home.jpeg', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
	})

	return (
		<group {...props} ref={group} dispose={null}>
			{/* LOWER */}
			<mesh castShadow receiveShadow geometry={nodes.Plane_2.geometry}>
				<meshPhysicalMaterial color={'#ffffff'} roughness={0} clearcoat={1} clearcoatRoughness={0} />
			</mesh>
			{/* UPPER */}
			<mesh castShadow receiveShadow geometry={nodes.Plane_3.geometry}>
				<meshPhysicalMaterial map={albedo} />
			</mesh>
		</group>
	)
}

useGLTF.preload('/plane.glb')
