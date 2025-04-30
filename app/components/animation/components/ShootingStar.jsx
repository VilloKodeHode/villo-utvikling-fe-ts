"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3, AdditiveBlending } from "three"; // ✅ selective import

const randomDirection = () => {
  let x = Math.random() * 2 - 1;
  let y = (Math.random() * 2 - 1) * 0.3; // reduce verticality
  const dir = new Vector3(x, y, 0);
  return dir.normalize();
};

const randomStartPosition = () => {
  const edge = Math.floor(Math.random() * 4);
  const distance = 100;
  const z = -150 + Math.random() * 50;

  switch (edge) {
    case 0:
      return new Vector3(-distance, (Math.random() - 0.5) * 100, z); // left
    case 1:
      return new Vector3(distance, (Math.random() - 0.5) * 100, z); // right
    case 2:
      return new Vector3((Math.random() - 0.5) * 100, distance, z); // top
    case 3:
      return new Vector3((Math.random() - 0.5) * 100, -distance, z); // bottom
    default:
      return new Vector3(0, 0, z);
  }
};

export const ShootingStar = () => {
  const headRef = useRef();
  const trailRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const direction = useRef(randomDirection());
  const velocity = useRef(0.5 + Math.random() * 0.4);
  const timer = useRef(null);
  const startTime = useRef(0);
  const position = useRef(randomStartPosition());

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

    const scrollY = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight * 1.5;
    const scrollFade = Math.max(0, 1 - scrollY / maxScroll);

    position.current.add(
      direction.current.clone().multiplyScalar(velocity.current)
    );
    headRef.current.position.copy(position.current);

    trailPositions.current.unshift(position.current.clone());
    if (trailPositions.current.length > maxTrailLength) {
      trailPositions.current.pop();
    }

    const positions = trailRef.current.geometry.attributes.position.array;
    for (let i = 0; i < maxTrailLength; i++) {
      const pos = trailPositions.current[i] || position.current;
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
    }
    trailRef.current.geometry.attributes.position.needsUpdate = true;

    const headOpacity = (1 - elapsed / lifetime) * scrollFade;
    headRef.current.material.opacity = Math.max(0, headOpacity);
    trailRef.current.material.opacity = 0.5 * scrollFade;

    headRef.current.rotation.z = Math.atan2(
      direction.current.y,
      direction.current.x
    );

    if (elapsed >= lifetime) {
      setIsActive(false);
    }
  });

  return (
    <>
      {/* Head */}
      <mesh ref={headRef}>
        <planeGeometry args={[2.5, 0.1]} />
        <meshBasicMaterial
          color={0xffffff}
          transparent
          opacity={0}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Trail */}
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
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </line>
    </>
  );
};
