"use client";
import { useRef, useMemo, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Nebula = () => {
  const meshRef = useRef();
  const { camera, size } = useThree();
  const [planeSize, setPlaneSize] = useState({ width: 200, height: 120 });

  // Dynamically calculate plane size based on camera and canvas size
  useEffect(() => {
    const distance = 100; // same as mesh Z
    const vFOV = THREE.MathUtils.degToRad(camera.fov); // convert vertical FOV to radians
    const height = 2 * Math.tan(vFOV / 2) * distance;
    const width = height * camera.aspect;

    setPlaneSize({ width: width * 1.4, height: height * 1.4 }); // slightly oversized
  }, [camera, size]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color(0xa082ff) }, 
    uColor2: { value: new THREE.Color(0x7000fc) }, 
    uOpacity: { value: 0.4 }
  }), []);

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  
    // Same scroll logic as stars
    const scrollY = window.scrollY;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight * 1.5;
    const opacityFactor = Math.max(0, 1 - scrollY / scrollableHeight);
  
    uniforms.uOpacity.value = 0.4 * opacityFactor; // Base opacity * scroll fade
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -100]}>
      <planeGeometry args={[planeSize.width, planeSize.height]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

// Vertex shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment shader
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
         (c - a) * u.y * (1.0 - u.x) +
         (d - b) * u.x * u.y;
}

void main() {
  vec2 uv = vUv * 5.0;
  float n = 0.0;
  float scale = 1.0;

  // FBM with lower accumulation for contrast
  for (int i = 0; i < 5; i++) {
    n += noise(uv + uTime * 0.02) * (0.5 / scale);
    scale *= 2.0;
    uv *= 2.0;
  }

  // Make it more patchy: discard low density areas
  if (n < 0.5) discard;

  // Enhance contrast of color spread
  float intensity = smoothstep(0.3, 1.0, n);

  vec3 color = mix(uColor1, uColor2, intensity);
  gl_FragColor = vec4(color, intensity * uOpacity * 0.3);
}
`;
