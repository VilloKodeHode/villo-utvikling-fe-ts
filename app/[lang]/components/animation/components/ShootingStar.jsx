// components/ShootingStar.jsx
"use client";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ⭐ Generate a random 2D direction vector (on the XY plane)
const randomDirection = () => {
  let x = Math.random() * 2 - 1; // range: -1 to 1
  let y = Math.random() * 2 - 1; // range: -1 to 1

  // Reduce Y influence to keep it more horizontal
  y *= 0.3;

  const dir = new THREE.Vector3(x, y, 0);
  return dir.normalize();
};

// ⭐ Generate a random starting position somewhere in the sky
const randomStartPosition = () => {
  const edge = Math.floor(Math.random() * 4);
  const distance = 100; // screen radius-ish
  const z = -150 + Math.random() * 50;

  switch (edge) {
    case 0: // left
      return new THREE.Vector3(-distance, (Math.random() - 0.5) * 100, z);
    case 1: // right
      return new THREE.Vector3(distance, (Math.random() - 0.5) * 100, z);
    case 2: // top
      return new THREE.Vector3((Math.random() - 0.5) * 100, distance, z);
    case 3: // bottom
      return new THREE.Vector3((Math.random() - 0.5) * 100, -distance, z);
    default:
      return new THREE.Vector3(0, 0, z);
  }
};

export const ShootingStar = () => {
  const headRef = useRef();
  const trailRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const direction = useRef(randomDirection());
  const velocity = useRef(0.5 + Math.random()*0.4);
  const timer = useRef(null);
  const startTime = useRef(0);
  const position = useRef(randomStartPosition());

  // Buffer for trail positions
  const trailPositions = useRef([]);
  const maxTrailLength = 10;

  useEffect(() => {
    const delay = Math.random() * 5 + 3;
    timer.current = setTimeout(() => {
      setIsActive(true);
      startTime.current = performance.now() / 1000;
      direction.current = randomDirection();
      position.current = randomStartPosition();
      trailPositions.current = [];
    }, delay * 1000);

    return () => clearTimeout(timer.current);
  }, [isActive]);

  useFrame(() => {
    if (!isActive || !headRef.current || !trailRef.current) return;

    const now = performance.now() / 1000;
    const elapsed = now - startTime.current;
    const lifetime = 3.5;

    position.current.add(direction.current.clone().multiplyScalar(velocity.current));
    headRef.current.position.copy(position.current);

    // Add position to trail history
    trailPositions.current.unshift(position.current.clone());
    if (trailPositions.current.length > maxTrailLength) {
      trailPositions.current.pop();
    }

    // Update trail geometry
    const positions = trailRef.current.geometry.attributes.position.array;
    for (let i = 0; i < maxTrailLength; i++) {
      const pos = trailPositions.current[i] || position.current;
      positions[i * 3 + 0] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
    }
    trailRef.current.geometry.attributes.position.needsUpdate = true;

    // Opacity fade for head
    const opacity = 1 - elapsed / lifetime;
    headRef.current.material.opacity = Math.max(0, opacity);

    headRef.current.rotation.z = Math.atan2(direction.current.y, direction.current.x);

    if (elapsed >= lifetime) {
      setIsActive(false);
    }
  });

  return (
    <>
      {/* Shooting star head */}
      <mesh ref={headRef}>
        <planeGeometry args={[2.5, 0.1]} />
        <meshBasicMaterial
          color={0xffffff}
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Trail (line segments) */}
      <line ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxTrailLength}
            array={new Float32Array(maxTrailLength * 3)}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={0xffffff}
          transparent
          opacity={0.5}
          linewidth={1}
          blending={THREE.AdditiveBlending}
        />
      </line>
    </>
  );
};

