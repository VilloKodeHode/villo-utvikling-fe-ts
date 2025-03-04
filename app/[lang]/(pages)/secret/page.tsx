"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Text } from "@react-three/drei";
import { useState, useRef } from "react";

export default function Home() {
  const Box = (props) => {
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const meshRef = useRef<THREE.Mesh>(null);
    const positions: { position: THREE.Vector3; normal: THREE.Vector3 }[] = [];
    const diceGeometry = new THREE.IcosahedronGeometry(1, 0);

    if (diceGeometry.index) {
      for (let i = 0; i < diceGeometry.index?.count; i += 3) {
        const a = diceGeometry.index?.array[i];
        const b = diceGeometry.index?.array[i + 1];
        const c = diceGeometry.index?.array[i + 2];

        const vA = new THREE.Vector3().fromBufferAttribute(
          diceGeometry.attributes.position,
          a
        );
        const vB = new THREE.Vector3().fromBufferAttribute(
          diceGeometry.attributes.position,
          b
        );
        const vC = new THREE.Vector3().fromBufferAttribute(
          diceGeometry.attributes.position,
          c
        );

        const center = new THREE.Vector3()
          .addVectors(vA, vB)
          .add(vC)
          .divideScalar(3);

        const normal = new THREE.Vector3()
          .crossVectors(vB.clone().sub(vA), vC.clone().sub(vA))
          .normalize();

        positions.push({
          position: center.clone().add(normal.clone().multiplyScalar(0.5)),
          normal,
        });
      }
    }

    useFrame((state, delta) => {
      if (meshRef.current) {
        meshRef.current.rotation.x += delta / 3;
        meshRef.current.rotation.y += delta / 3;
      }
    });

    return (
      <>
        <group {...props}>
          <mesh
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
          >
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
            <Edges color="darkOrange" />
          </mesh>
          {positions.map((pos, index) => (
            <Text
              key={index}
              position={pos.position.toArray()}
              fontSize={0.2}
              font="helvetiker"
              color="black"
              anchorX="center"
              anchorY="middle"
              // rotation={pos.normal.clone().multiplyScalar(-1).toArray()}
              // onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
              onUpdate={(self) =>
                self.lookAt(pos.normal.clone().multiplyScalar(5))
              }
              // depthOffset={-1}
            >
              {index + 1}
            </Text>
          ))}
        </group>
      </>
    );
  };
  return (
    <>
      <div className="h-screen w-full">
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <Box position={[0, 0, 0]} />
          {/* <Box position={[-1.2, 0, 0]} /> */}
          {/* <Box position={[1.2, 0, 0]} /> */}
        </Canvas>
      </div>
    </>
  );
}
