import * as THREE from "three";
import { Edges, Text } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Dice = (props) => {
  const [hovered, setHover] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const textGroupRef = useRef<THREE.Group>(null);
  const positions: [THREE.Vector3, THREE.Vector3][] = [];

  // Create Icosahedron geometry (20-sided dice)
  const diceGeometry = new THREE.IcosahedronGeometry(1, 0);
  const positionArray = diceGeometry.attributes.position.array;

  for (let i = 0; i < positionArray.length; i += 9) {
    const vA = new THREE.Vector3(positionArray[i], positionArray[i + 1], positionArray[i + 2]);
    const vB = new THREE.Vector3(positionArray[i + 3], positionArray[i + 4], positionArray[i + 5]);
    const vC = new THREE.Vector3(positionArray[i + 6], positionArray[i + 7], positionArray[i + 8]);

    const center = new THREE.Vector3().addVectors(vA, vB).add(vC).divideScalar(3);
    const normal = new THREE.Vector3().crossVectors(vB.clone().sub(vA), vC.clone().sub(vA)).normalize();
    const textPosition = center.clone().add(normal.clone().multiplyScalar(0.01));

    positions.push([textPosition, normal]);
  }

  // 🎲 Valid orientations for a real dice roll (approximations)
  const diceOrientations = [
    [0, 0, 0],
    [Math.PI / 2, 0, 0],
    [-Math.PI / 2, 0, 0],
    [Math.PI, 0, 0],
    [0, Math.PI / 2, 0],
    [0, -Math.PI / 2, 0],
    [0, Math.PI, 0],
    [Math.PI / 2, Math.PI / 2, 0],
    [-Math.PI / 2, -Math.PI / 2, 0],
    [Math.PI / 2, -Math.PI / 2, 0],
    [-Math.PI / 2, Math.PI / 2, 0],
    [Math.PI / 2, 0, Math.PI / 2],
    [-Math.PI / 2, 0, -Math.PI / 2],
    [0, Math.PI / 2, Math.PI / 2],
    [0, -Math.PI / 2, -Math.PI / 2],
    [Math.PI, Math.PI / 2, 0],
    [Math.PI, -Math.PI / 2, 0],
    [Math.PI, Math.PI, Math.PI / 2],
    [Math.PI, Math.PI, -Math.PI / 2],
    [0, 0, Math.PI]
  ];

  // Smooth rotation animation
  const targetRotation = useRef(new THREE.Vector3(0, 0, 0));

  // 🎲 Roll Dice to a Random Side
  const rollDice = () => {
    if (meshRef.current && textGroupRef.current) {
      const randomIndex = Math.floor(Math.random() * diceOrientations.length);
      const [x, y, z] = diceOrientations[randomIndex];

      targetRotation.current.set(x, y, z);
    }
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotation.current.x, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation.current.y, 0.1);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRotation.current.z, 0.1);

      if (textGroupRef.current) {
        textGroupRef.current.rotation.copy(meshRef.current.rotation);
      }
    }
  });

  return (
    <group {...props}>
      {/* 🎲 Dice Mesh */}
      <mesh
        ref={meshRef}
        onClick={rollDice} // ✅ Click to roll
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial wireframe={false} color={hovered ? "darkorange" : "orange"} />
        <Edges color="black" />
      </mesh>

      {/* 🔢 Number Texts (attached to dice rotation) */}
      <group ref={textGroupRef}>
        {positions.map(([position, normal], index) => (
          <Text
            key={index}
            position={position.toArray()}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.01}
            outlineColor="black"
            onUpdate={(self) => self.lookAt(position.clone().add(normal))}
          >
            {index + 1}
          </Text>
        ))}
      </group>
    </group>
  );
};
