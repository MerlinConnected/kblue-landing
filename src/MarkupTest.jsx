import React from 'react'
import { MeshTransmissionMaterial, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function MarkupTest(props) {
	const { nodes, materials } = useGLTF('/markup-test.glb')

	const albedoChart = useTexture('/tex/chart.png', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
	})

	const albedoGraph = useTexture('/tex/graph.png', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
	})
	return (
		<group {...props} dispose={null}>
			<group name='Markup'>
				<mesh name='Markup_1' castShadow receiveShadow geometry={nodes.Markup_1.geometry}>
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
				<mesh
					name='MarkupWindow03'
					castShadow
					receiveShadow
					geometry={nodes.MarkupWindow03.geometry}
					position={[1.405, -1.058, 1.36]}
				>
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
				<group name='MarkupWindow02' position={[2.627, 0.655, -1.811]}>
					{/* <mesh name='window04002' castShadow receiveShadow geometry={nodes.window04002.geometry}>
						<meshPhysicalMaterial color={'#ffffff'} roughness={0} clearcoat={1} clearcoatRoughness={0} />
					</mesh> */}
					<mesh name='window04002_1' castShadow receiveShadow geometry={nodes.window04002_1.geometry}>
						<meshBasicMaterial map={albedoChart} />
					</mesh>
				</group>
				<mesh
					name='MarkupWindow01'
					castShadow
					receiveShadow
					geometry={nodes.MarkupWindow01.geometry}
					position={[-2.523, 0.471, -0.516]}
				>
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
				<group name='MarkupWindow04' position={[-2.334, -1.638, 0.602]}>
					{/* <mesh name='window04003' castShadow receiveShadow geometry={nodes.window04003.geometry}>
						<meshPhysicalMaterial color={'#ffffff'} roughness={0} clearcoat={1} clearcoatRoughness={0} />
					</mesh> */}
					<mesh name='window04003_1' castShadow receiveShadow geometry={nodes.window04003_1.geometry}>
						<meshBasicMaterial map={albedoGraph} />
					</mesh>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/markup-test.glb')
