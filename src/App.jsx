import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Lightformer, Float } from '@react-three/drei'
import Key from './Key'
import { easing } from 'maath'
import { Windows } from './Windows'

export default function App() {
	return (
		<Canvas shadows orthographic camera={{ position: [15, -15, 30], zoom: 100 }}>
			<color attach='background' args={['#FBFBFD']} />
			<Float floatIntensity={0.1} speed={0.5} floatingRange={[1, 10]} rotationIntensity={0}>
				<Key rotation-x={Math.PI / 2} rotation-y={Math.PI} />
				<Windows rotation-y={Math.PI} />
			</Float>
			{/* Environment & Lights */}
			<Environment resolution={32}>
				<group rotation={[-Math.PI / 4, -0.3, 0]}>
					<Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
					<Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
					<Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
					<Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
					<Lightformer type='ring' intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
				</group>
			</Environment>

			<ambientLight intensity={0.75} />

			<Rig />
		</Canvas>
	)
}

function Rig() {
	useFrame((state, delta) => {
		easing.damp3(
			state.camera.position,
			[-state.pointer.x * 5, -state.pointer.y * 3.5, 15 + Math.cos(state.pointer.x) * 10],
			0.3,
			delta
		)
		state.camera.lookAt(0, 0, 0)
	})
}
