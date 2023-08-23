import { useFrame } from '@react-three/fiber'
import { useState, useRef } from 'react'
import { MathUtils } from 'three'

export default function Scale(props) {
	const ref = useRef()
	const [hovered, setHover] = useState(false)

	useFrame(() => {
		ref.current.scale.y =
			ref.current.scale.z =
			ref.current.scale.x =
				MathUtils.lerp(ref.current.scale.y, hovered ? 1.05 : 1, 0.1)
	})

	return (
		<mesh
			{...props}
			ref={ref}
			onPointerOver={(e) => {
				e.stopPropagation()
				setHover(true)
			}}
			onPointerOut={(e) => {
				e.stopPropagation()
				setHover(false)
			}}
		>
			{props.children}
		</mesh>
	)
}
