"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  CanvasTexture,
  MathUtils,
  Color,
  AdditiveBlending,
  NormalBlending,
} from "three"; // ✅ only what you use
import { useTheme } from "next-themes";

export const ArrowDownConstellation = () => {
  const { theme } = useTheme();

  const groupRef = useRef();
  const clickPlaneRef = useRef();
  const { size, camera } = useThree();

  const [hovered, setHovered] = useState(false);
  const targetOpacity = useRef(1);

  const starTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx || !theme) return null;

    const isLight = theme === "light";
    const glowColor = isLight ? "40, 37, 59" : "241,239,255";
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, `rgba(${glowColor}, ${isLight ? 1.5 : 1})`);
    gradient.addColorStop(1, `rgba(${glowColor}, 0)`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    return new CanvasTexture(canvas);
  }, [theme]);

  const basePositions = useMemo(() => {
    const positions = [];
    const halfWidth = 2;
    const height = 2;
    const steps = 2;
    const jitter = 0.2;

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const randX = () => (Math.random() - 0.5) * jitter;
      const randY = () => (Math.random() - 0.5) * jitter;
      positions.push([-t * halfWidth + randX(), t * height + randY(), 0]);
      positions.push([t * halfWidth + randX(), t * height + randY(), 0]);
    }

    return positions;
  }, []);

  const positions = useMemo(
    () => new Float32Array(basePositions.length * 3),
    [basePositions]
  );

  const driftSeeds = useMemo(() => {
    return basePositions.map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
  }, [basePositions]);

  const arrowZ = -40;
  const arrowY = useMemo(() => {
    const distance = Math.abs(arrowZ);
    const fov = (camera.fov * Math.PI) / 180;
    const visibleHeight = 2 * Math.tan(fov / 2) * distance;
    return -visibleHeight / 2 + visibleHeight * 0.05;
  }, [camera.fov, size.height, size.width]);

  useFrame(({ clock }) => {
    const pageHeight = document.documentElement.scrollHeight;
    const shouldHide = pageHeight < window.innerHeight * 1.5;

    if (shouldHide) {
      if (groupRef.current) groupRef.current.visible = false;
      if (clickPlaneRef.current) clickPlaneRef.current.visible = false;
      return;
    }

    const t = clock.getElapsedTime();
    const scrollY = window.scrollY;
    const fade = Math.max(0, 1 - scrollY / (window.innerHeight * 0.5));
    const flicker = 0.3 + 0.2 * Math.sin(t * 2);
    const hoverBoost = hovered ? 1.0 : 0.0;
    targetOpacity.current = MathUtils.lerp(
      targetOpacity.current,
      (flicker + hoverBoost) * fade,
      0.1
    );

    if (groupRef.current) {
      groupRef.current.visible = true;
      groupRef.current.material.opacity = targetOpacity.current;

      const driftScale = 0.05;
      basePositions.forEach(([x0, y0, z0], i) => {
        const seed = driftSeeds[i];
        positions[i * 3 + 0] = x0 + Math.sin(t + seed.x) * driftScale;
        positions[i * 3 + 1] = y0 + Math.cos(t + seed.y) * driftScale;
        positions[i * 3 + 2] = z0;
      });

      groupRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (clickPlaneRef.current) {
      const plane = clickPlaneRef.current;

      if (!plane.__originalRaycast && plane.raycast) {
        plane.__originalRaycast = plane.raycast;
      }

      const shouldBeVisible = fade > 0.01;
      plane.visible = shouldBeVisible;
      plane.raycast = shouldBeVisible ? plane.__originalRaycast : () => {};
    }
  });

  const scrollToNextSection = () => {
    const next = document.querySelector("[data-scroll-target]");
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <mesh
        ref={clickPlaneRef}
        position={[0, arrowY, arrowZ + 0.01]}
        onPointerDown={scrollToNextSection}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}>
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial
          transparent
          opacity={0}
        />
      </mesh>

      <points
        ref={groupRef}
        position={[0, arrowY, arrowZ]}>
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
          color={
            theme === "light" ? new Color("#111111") : new Color("#f5f5ff")
          }
          blending={theme === "light" ? NormalBlending : AdditiveBlending}
        />
      </points>
    </>
  );
};
