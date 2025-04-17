"use client";
import { useRef, useMemo, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Nebula = () => {
  const meshRef = useRef();
  const { camera, size, gl } = useThree();
  const [planeSize, setPlaneSize] = useState({ width: 200, height: 120 });
  const [enabled, setEnabled] = useState(true);

  // ✅ Disable if low-end GPU
  useEffect(() => {
    const isLowEnd =
      gl.capabilities.maxTextureSize < 4096 ||
      gl.capabilities.maxVertexUniforms < 256;

    if (isLowEnd) {
      console.warn("[Nebula] Disabled due to low GPU capabilities.");
      setEnabled(false);
    }
  }, [gl]);

  // Dynamically size the plane to fill screen (oversized)
  useEffect(() => {
    const distance = 100;
    const vFOV = THREE.MathUtils.degToRad(camera.fov);
    const height = 2 * Math.tan(vFOV / 2) * distance;
    const width = height * camera.aspect;
    setPlaneSize({ width: width * 1.4, height: height * 1.4 });
  }, [camera, size]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color(0xa082ff) },
    uColor2: { value: new THREE.Color(0x7000fc) },
    uOpacity: { value: 0.4 }
  }), []);

  useFrame(({ clock }) => {
    if (!enabled || !meshRef.current) return;

    uniforms.uTime.value = clock.getElapsedTime();

    // ✅ Parallax effect — slow upward drift when scrolling
    const scrollY = window.scrollY;
    meshRef.current.position.y = scrollY * 0.02; // tweak this factor as needed
  });

  if (!enabled) return null;

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

// Vertex Shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader (Patchy Nebula FBM)
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

    for (int i = 0; i < 5; i++) {
      n += noise(uv + uTime * 0.02) * (0.5 / scale);
      scale *= 2.0;
      uv *= 2.0;
    }

    if (n < 0.5) discard;

    float intensity = smoothstep(0.3, 1.0, n);
    vec3 color = mix(uColor1, uColor2, intensity);
    gl_FragColor = vec4(color, intensity * uOpacity * 0.3);
  }
`;