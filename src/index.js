import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Canvas>
        <Suspense fallback={null}>
          <App />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)
