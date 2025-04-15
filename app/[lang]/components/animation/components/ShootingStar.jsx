// components/ShootingStar.jsx
"use client";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ⭐ Generate a random 2D direction vector (on the XY plane)
const randomDirection = () => {
  const angle = Math.random() * Math.PI * 2;
  return new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0).normalize(); // tweak Z if you want 3D curve
};

// ⭐ Generate a random starting position somewhere in the sky
const randomStartPosition = () => {
  return new THREE.Vector3(
    (Math.random() - 0.5) * 120, // horizontal spread
    (Math.random() - 0.5) * 120, // vertical spread
    -50 + Math.random() * 100    // depth into scene (can tweak closer/farther)
  );
};

export const ShootingStar = () => {
  const meshRef = useRef();
  const [isActive, setIsActive] = useState(false); // controls visibility
  const direction = useRef(randomDirection());     // randomized once per event
  const velocity = useRef(1.5 + Math.random());    // speed of movement (tweak here)
  const timer = useRef(null);                      // handle to restart timer
  const startTime = useRef(0);                     // animation start timestamp
  const position = useRef(randomStartPosition());  // start position

  // ⭐ Trigger the shooting star after a delay (new every cycle)
  useEffect(() => {
    const delay = Math.random() * 5 + 3; // delay in seconds between 3–8 (tweak this)
    timer.current = setTimeout(() => {
      setIsActive(true);
      startTime.current = performance.now() / 1000;
      direction.current = randomDirection();
      position.current = randomStartPosition();
    }, delay * 1000);

    return () => clearTimeout(timer.current); // clean up on unmount
  }, [isActive]);

  // ⭐ Animate position, fade out, and rotation every frame
  useFrame(() => {
    if (!isActive || !meshRef.current) return;

    const now = performance.now() / 1000;
    const elapsed = now - startTime.current;
    const lifetime = 1.2; // how long the shooting star lives (seconds)

    // Update position based on direction and velocity
    position.current.add(direction.current.clone().multiplyScalar(velocity.current));
    meshRef.current.position.copy(position.current);

    // Fade out over time
    const opacity = 1 - elapsed / lifetime;
    meshRef.current.material.opacity = Math.max(0, opacity);

    // Rotate to face direction of travel
    meshRef.current.rotation.z = Math.atan2(direction.current.y, direction.current.x);

    // End the shooting star when lifetime expires
    if (elapsed >= lifetime) {
      setIsActive(false);
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* ⭐ Shape of the star trail — width x height. Tweak for longer/shorter streak */}
      <planeGeometry args={[2.5, 0.1]} />
      <meshBasicMaterial
        color={0xffffff}          // shooting star color (pure white here)
        transparent
        opacity={0}               // start invisible
        blending={THREE.AdditiveBlending} // glow blending
        depthWrite={false}       // prevent occlusion artifacts
      />
    </mesh>
  );
};
