import { useSpring } from "@react-spring/core"
import { shaderMaterial } from "@react-three/drei"
import { extend, useLoader } from "@react-three/fiber"
import React from "react"
import * as THREE from "three"
import fragmentShader from "./shaders/fragment.glsl"
import vertexShader from "./shaders/vertex.glsl"

const FooShaderMaterial = shaderMaterial(
  {
    u_image: new THREE.Texture(),
    u_inset: new THREE.Vector4(0, 0, 0, 0),
  },
  vertexShader,
  fragmentShader
)

extend({ FooShaderMaterial })

const App = () => {
  const img = useLoader(
    THREE.TextureLoader,
    "https://images.unsplash.com/photo-1613910117442-b7ef140b37f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4NTAxMzg5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
  )

  const [{ inset }] = useSpring(() => ({
    inset: [0.0, 0.0, 0.2, 0.2],
  })) // doesn't work

  // const thisInsetWorks = [0.3,0.3,0.3,0.3]

  return (
    <mesh>
      <planeBufferGeometry args={[3, 18 / 8]} />
      <fooShaderMaterial
        uniforms-u_image-value={img}
        uniforms-u_inset-value={inset}
      />
    </mesh>
  )
}

export default App
