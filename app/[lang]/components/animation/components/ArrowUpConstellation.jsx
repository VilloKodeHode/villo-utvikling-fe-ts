"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const ArrowUpConstellation = () => {
  const groupRef = useRef();
  const clickPlaneRef = useRef();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const targetOpacity = useRef(0);

  const starTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const positions = useMemo(() => {
    const points = [];
    const size = 1.5;
    for (let i = 0; i <= 2; i++) {
      const t = i / 2;
      points.push([-t * size, -t * size, 0]);
      points.push([t * size, -t * size, 0]);
    }
    return new Float32Array(points.flat());
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll(); // check on mount
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scrollY = window.scrollY;
    const fade = Math.min(1, scrollY / (window.innerHeight * 0.5));
    const flicker = 0.4 + 0.3 * Math.sin(t * 2);
    const hoverBoost = hovered ? 0.5 : 0;

    const desiredOpacity = (flicker + hoverBoost) * fade;
    targetOpacity.current = THREE.MathUtils.lerp(
      targetOpacity.current,
      desiredOpacity,
      0.1
    );

    if (groupRef.current) {
      groupRef.current.visible = visible;
      groupRef.current.material.opacity = targetOpacity.current;
    }

    if (clickPlaneRef.current) {
      clickPlaneRef.current.visible = visible && targetOpacity.current > 0.05;
    }
  });

  return (
    <>
      <mesh
        ref={clickPlaneRef}
        position={[0, 0, 0.1]}
        onPointerDown={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
      >
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <points ref={groupRef} position={[0, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={2}
          sizeAttenuation
          map={starTexture}
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          depthTest={false}
        />
      </points>
    </>
  );
};

export default function FloatingArrowUp() {
  return (
    <div className="fixed bottom-2 right-2 w-20 h-20 z-[9999] pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ArrowUpConstellation />
      </Canvas>
    </div>
  );
}
