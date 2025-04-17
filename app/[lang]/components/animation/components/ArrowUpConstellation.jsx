"use client";
import { Suspense, useMemo, useRef, useState } from "react";
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import * as THREE from "three";

export const ArrowUpConstellation = ({ standalone = false }) => {
  const groupRef = useRef();
  const clickPlaneRef = useRef();
  const { size, camera } = useThree();

  const [hovered, setHovered] = useState(false);
  const targetOpacity = useRef(0);

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

  const buttonZ = -5;

  // Floating mode uses fixed X/Y
  const buttonY = useMemo(() => {
    if (standalone) return 0;
    const distance = Math.abs(buttonZ);
    const fov = (camera.fov * Math.PI) / 180;
    const visibleHeight = 2 * Math.tan(fov / 2) * distance;
    return -visibleHeight / 2 + visibleHeight * 0.1;
  }, [camera.fov, size, standalone]);

  const buttonX = useMemo(() => {
    if (standalone) return 0;
    const distance = Math.abs(buttonZ);
    const visibleWidth =
      2 *
      Math.tan((camera.fov * Math.PI) / 360) *
      distance *
      (size.width / size.height);
    return visibleWidth / 2 - 1.5;
  }, [camera.fov, size, standalone]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const flicker = 0.3 + 0.2 * Math.sin(t * 2);
    const scrollY = window.scrollY;
    const fade = Math.min(1, scrollY / (window.innerHeight * 0.4)); // fades in near top

    const hoverBoost = hovered ? 1.0 : 0.0;
    const target = (flicker + hoverBoost) * fade;

    targetOpacity.current = THREE.MathUtils.lerp(
      targetOpacity.current,
      target,
      0.1
    );

    if (groupRef.current) {
      groupRef.current.material.opacity = targetOpacity.current;
    }

    if (clickPlaneRef.current) {
      const plane = clickPlaneRef.current;

      if (!plane.__originalRaycast && typeof plane.raycast === "function") {
        plane.__originalRaycast = plane.raycast;
      }

      const shouldBeVisible = targetOpacity.current > 0.01;
      plane.visible = shouldBeVisible;
      plane.raycast = shouldBeVisible ? plane.__originalRaycast : () => {};
    }
  });

  return (
    <>
      <mesh
        ref={clickPlaneRef}
        position={[buttonX, buttonY, buttonZ + 0.01]}
        onPointerDown={scrollToTop}
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
        <meshBasicMaterial transparent opacity={0.2} color={"white"} depthTest={false} />
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
          depthTest={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
};


export default function FloatingScrollToTopCanvas() {
  return (
    <div className="fixed bottom-6 right-6 z-[1000] w-20 h-20">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        eventSource={document.body}
        eventPrefix="client"
      >
               <Suspense fallback={null}>
        <ArrowUpConstellation standalone />
        </Suspense>
      </Canvas>
    </div>
  );
}