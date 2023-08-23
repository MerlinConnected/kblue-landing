import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, Float } from '@react-three/drei'
import { easing } from 'maath'
import { Perf } from 'r3f-perf'

import Animations from './Animation'
import Markup from './Markup'
import Planet from './Planet'

export default function App() {
	return (
		<Canvas shadows orthographic dpr={[1, 2]} camera={{ position: [15, -15, 30], zoom: 100 }}>
			<color attach='background' args={['#FBFBFD']} />
			<Float rotationIntensity={0.5} floatIntensity={0.2}>
				{/* <Animations /> */}
				{/* <Markup /> */}
				<Planet />
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

			<Perf />
		</Canvas>
	)
}

function Rig() {
	useFrame((state, delta) => {
		easing.damp3(state.camera.position, [-state.pointer.x * 5 - 25, -state.pointer.y * 3.5 - 5, 50], 0.3, delta)
		state.camera.lookAt(0, 0, 0)
	})
}
