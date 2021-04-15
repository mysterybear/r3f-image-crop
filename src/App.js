import { shaderMaterial } from "@react-three/drei"
import { extend, useFrame, useLoader } from "@react-three/fiber"
import { useControls } from "leva"
import React, { useEffect, useRef } from "react"
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
  const ref = useRef()

  useEffect(() => {
    ref.current.uniforms.u_image.value = img
  }, [img])

  const { t, r, b, l } = useControls({
    t: {
      value: 0.0,
      step: 0.001,
      min: 0.0,
      max: 1.0,
    },
    r: {
      value: 0.0,
      step: 0.001,
      min: 0.0,
      max: 1.0,
    },
    b: {
      value: 0.0,
      step: 0.001,
      min: 0.0,
      max: 1.0,
    },
    l: {
      value: 0.0,
      step: 0.001,
      min: 0.0,
      max: 1.0,
    },
  })

  useFrame(() => {
    ref.current.uniforms.u_inset.value.x = t
    ref.current.uniforms.u_inset.value.y = r
    ref.current.uniforms.u_inset.value.z = b
    ref.current.uniforms.u_inset.value.w = l
  })

  return (
    <mesh>
      <planeBufferGeometry args={[1, 6 / 8]} />
      <fooShaderMaterial ref={ref} />
    </mesh>
  )
}

export default App
