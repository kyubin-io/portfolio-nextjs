import * as THREE from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlaneGeometry from "./PlaneGeometry";
import WavingBackground from "./WavingBackground";
import { useRef } from "react";

export default function ThreejsBg() {
  const meshRef = useRef();
  const geometryRef = useRef();
  const texture = useLoader(THREE.TextureLoader, "/img/5.jpg");

  const geometry = new THREE.PlaneGeometry(5, 7);

  // 점의 수 가져오기
  const count = geometry.attributes.position.count;

  // 애니메이션 함수 정의
  const animate = () => {
    for (let i = 0; i < count; i++) {
      const x = geometry.attributes.position.getX(i);
      const y = geometry.attributes.position.getY(i);
      geometry.attributes.position.setZ(i, x * 2);
    }
    // 버텍스 속성을 업데이트
    geometry.attributes.position.needsUpdate = true;
  };

  // useFrame(() => {
  //   animate();
  // });

  return (
    <>
      <Canvas>
        {/* <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh ref={meshRef} geometry={geometry}>
          <planeGeometry args={[5, 5, 15, 9]} />
          <meshBasicMaterial attach="material" map={texture} wireframe={true} />
        </mesh> */}
        {/* <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} /> */}
        {/* <PlaneGeometry /> */}
        {/* <WavingBackground /> */}
      </Canvas>
    </>
  );
}
