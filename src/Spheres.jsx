import { useRef } from 'react'

export default function Spheres() {
	const ref = useRef()
	return (
		<group ref={ref}>
			<mesh position={[-5, 0, -5]}>
				<sphereGeometry args={[2, 32, 32]} />
				<meshStandardMaterial color='white' />
			</mesh>
			<mesh position={[2, 0.75, -10]}>
				<sphereGeometry args={[0.7, 32, 32]} />
				<meshStandardMaterial color='white' />
			</mesh>
			<mesh position={[1, -2, 5]}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshStandardMaterial color='white' />
			</mesh>
			<mesh position={[-5, 0, -5]}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshStandardMaterial color='white' />
			</mesh>
		</group>
	)
}
