"use client";
//! not currently in use

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Color, AdditiveBlending, DoubleSide } from "three"; // ✅ precise import

// Vertex Shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader
const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uOpacity;

  float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) +
           (c - a)* u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = vUv * 5.0;
    float n = 0.0;
    float scale = 1.0;

    for (int i = 0; i < 5; i++) {
      n += noise(uv + uTime * 0.03) / scale;
      scale *= 2.0;
      uv *= 2.0;
    }

    vec3 color = mix(uColor1, uColor2, n);
    gl_FragColor = vec4(color, n * uOpacity);
  }
`;

// Nebula Layer
const NebulaLayer = ({ color1, color2, z = -100 }) => {
  const meshRef = useRef();
  const { size, camera } = useThree();

  const fov = camera.fov;
  const aspect = size.width / size.height;
  const distance = Math.abs(z);
  const height = 2 * Math.tan((fov * Math.PI) / 360) * distance;
  const width = height * aspect;

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new Color(color1) },
      uColor2: { value: new Color(color2) },
      uOpacity: { value: 0.1 },
    }),
    [color1, color2]
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, z]}>
      <planeGeometry args={[width * 1.1, height * 1.1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        side={DoubleSide}
      />
    </mesh>
  );
};

export const NebulaLayers = () => {
  return (
    <>
      <NebulaLayer
        color1="#6b00b3"
        color2="#00b39f"
        z={-100}
      />
      <NebulaLayer
        color1="#ff0080"
        color2="#3300ff"
        z={-120}
      />
      <NebulaLayer
        color1="#00ffff"
        color2="#001a33"
        z={-140}
      />
    </>
  );
};
