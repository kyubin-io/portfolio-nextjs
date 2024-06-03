import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function WavingBackground() {
  const materialRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    materialRef.current.map.offset.y = Math.sin(time) * 0.05; // Adjust the amplitude of the wave here
  });

  return (
    <mesh>
      <planeGeometry args={[10, 10, 32, 32]} />
      <meshBasicMaterial
        ref={materialRef}
        map={new THREE.TextureLoader().load("/img/5.jpg")}
      />
    </mesh>
  );
}

// const WavingShader = {
//   uniforms: {
//     uTime: { value: 0.0 },
//     uTexture: { value: new THREE.TextureLoader().load("/img/5.jpg") },
//   },
//   vertexShader: `
//       varying vec2 vUv;
//       uniform float uTime;

//       void main() {
//         vUv = uv;
//         vec3 pos = position;
//         pos.z = sin(pos.y * 10.0 + uTime) * 0.1;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//       }
//     `,
//   fragmentShader: `
//       varying vec2 vUv;
//       uniform sampler2D uTexture;

//       void main() {
//         vec4 color = texture2D(uTexture, vUv);
//         gl_FragColor = color;
//       }
//     `,
// };

export default WavingBackground;
