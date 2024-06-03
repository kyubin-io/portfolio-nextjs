import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function PlaneGeometry() {
  const texture = useLoader(THREE.TextureLoader, "/img/5.jpg");

  const meshRef = useRef();
  const geometryRef = useRef();

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
    geometryRef.current.attributes.position.needsUpdate = true;
  };

  // 매 프레임마다 애니메이션 함수 호출
  //   useFrame(() => {
  //     animate();
  //   });

  return (
    <mesh ref={meshRef} geometry={geometryRef?.current}>
      <planeGeometry args={[5, 7]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}
