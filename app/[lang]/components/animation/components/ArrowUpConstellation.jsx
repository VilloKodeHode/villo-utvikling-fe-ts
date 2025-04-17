"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const ArrowUpContellation = () => {
  const groupRef = useRef();
  const clickPlaneRef = useRef();
  const { size, camera } = useThree();

  const [isVisible, setIsVisible] = useState(false);
  const targetOpacity = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const starTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const starPositions = useMemo(() => {
    const positions = [];
    const halfWidth = 1.5;
    const height = 1.5;
    const steps = 2;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      positions.push([-t * halfWidth, -t * height, 0]); // inverted V
      positions.push([t * halfWidth, -t * height, 0]);
    }
    return positions;
  }, []);

  const positions = useMemo(() => {
    const array = new Float32Array(starPositions.length * 3);
    starPositions.forEach((pos, i) => array.set(pos, i * 3));
    return array;
  }, [starPositions]);

  const buttonZ = -20;
  const buttonY = useMemo(() => {
    const distance = Math.abs(buttonZ);
    const fov = (camera.fov * Math.PI) / 180;
    const visibleHeight = 2 * Math.tan(fov / 2) * distance;
    return -visibleHeight / 2 + visibleHeight * 0.1;
  }, [camera.fov, size]);

  const buttonX = useMemo(() => {
    const distance = Math.abs(buttonZ);
    const visibleWidth = (2 * Math.tan((camera.fov * Math.PI) / 360) * distance) * (size.width / size.height);
    return visibleWidth / 2 - 1.5; // 1.5 units in from right
  }, [camera.fov, size]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const flicker = 0.3 + 0.2 * Math.sin(t * 2);
    const target = isVisible ? flicker : 0;
    targetOpacity.current = THREE.MathUtils.lerp(targetOpacity.current, target, 0.1);

    if (groupRef.current) {
      groupRef.current.material.opacity = targetOpacity.current;
    }

    if (clickPlaneRef.current) {
      const plane = clickPlaneRef.current;
      plane.visible = targetOpacity.current > 0.01;
      plane.raycast = plane.visible
        ? plane.__originalRaycast ?? plane.raycast
        : () => {};
    }
  });

  return (
    <>
      <mesh
        ref={clickPlaneRef}
        position={[buttonX, buttonY, buttonZ + 0.01]}
        onPointerDown={scrollToTop}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <points ref={groupRef} position={[buttonX, buttonY, buttonZ]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={1}
          sizeAttenuation
          map={starTexture}
          transparent
          opacity={1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
};
