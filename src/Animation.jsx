import { useAnimations, useGLTF, useScroll, ScrollControls, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Suspense, useEffect } from 'react'
import * as THREE from 'three'

export default function Animation() {
	return (
		<Suspense fallback={null}>
			<ScrollControls pages={1}>
				<Animate />
			</ScrollControls>
		</Suspense>
	)
}

function Animate({ ...props }) {
	const group = useRef()

	const scroll = useScroll()
	const { nodes, animations } = useGLTF('/windows-animated.glb') // Load the glTF model and retrieve the scene, nodes, and animations
	const { actions } = useAnimations(animations, group) // Get access to animation actions

	useEffect(() => {
		// Set the initial playback state of the 'windowAnimation' animation to paused
		void (actions['windowAnimation'].play().paused = true)
	}, [actions])

	useFrame((state, delta) => {
		const action = actions['windowAnimation'] // Get the 'windowAnimation' animation action
		const offset = 1 - scroll.offset // Calculate the offset based on scroll position

		// Interpolate the animation time based on the offset
		action.time = THREE.MathUtils.damp(action.time, action.getClip().duration * offset, 100, delta)

		state.camera.lookAt(0, 0, 0) // Set the camera to look at the origin (0, 0, 0)
	})

	return (
		<group ref={group} {...props} dispose={null}>
			<group name='Scene'>
				<mesh
					name='Window01'
					castShadow
					receiveShadow
					geometry={nodes.Window01.geometry}
					position={[-8.018, 3.022, -1.224]}
					rotation={[0, 0, 0.32]}
				>
					<meshToonMaterial color={'#3054e5'} />
				</mesh>
				<mesh
					name='Window02'
					castShadow
					receiveShadow
					geometry={nodes.Window02.geometry}
					position={[-6.715, 2.953, -1.503]}
					rotation={[0, 0, 0.124]}
				>
					<meshToonMaterial color={'#2854ff'} />
				</mesh>
				<mesh
					name='Window03'
					castShadow
					receiveShadow
					geometry={nodes.Window03.geometry}
					position={[-8.075, -3.184, 0.774]}
					rotation={[0, 0, -0.408]}
				>
					<meshToonMaterial color={'#3F65FC'} />
				</mesh>
				<mesh
					name='Window04'
					castShadow
					receiveShadow
					geometry={nodes.Window04.geometry}
					position={[7.324, 3.338, -1.031]}
					rotation={[0, 0, -0.38]}
				>
					<meshToonMaterial color={'#2854ff'} />
				</mesh>
				<mesh
					name='Window05'
					castShadow
					receiveShadow
					geometry={nodes.Window05.geometry}
					position={[8.232, 0.494, -1.696]}
					rotation={[0, 0, -0.459]}
				>
					<meshToonMaterial color={'#3F65FC'} />
				</mesh>
				<group name='Empty' position={[0, 4.55, 0]} rotation={[-0.271, 0.127, 1.406]}>
					<mesh name='Rounded_Key' castShadow receiveShadow geometry={nodes.Rounded_Key.geometry}>
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
			</group>
		</group>
	)
}

useGLTF.preload('/windows-animated.glb')
