import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export const createStarLayer = (count, radiusRange, starColors) => {
  const positions = [];
  const colors = [];
  const sizes = [];
  const offsets = [];

  for (let i = 0; i < count; i++) {
    const radius =
      radiusRange[0] + Math.random() * (radiusRange[1] - radiusRange[0]);
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    positions.push(x, y, z);

    const color = starColors[Math.floor(Math.random() * starColors.length)];
    colors.push(color.r, color.g, color.b);

    sizes.push(0.3 + Math.random() * 0.7);
    offsets.push(Math.random() * Math.PI * 2); // twinkle offset
  }

  return {
    positions: new Float32Array(positions),
    colors: new Float32Array(colors),
    sizes: new Float32Array(sizes),
    offsets: new Float32Array(offsets),
  };
};

export const StarLayer = ({
  data,
  scrollFactor,
  starTexture,
  rotationSpeed,
}) => {
  const ref = useRef();

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(data.positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(data.colors, 3));
    geom.setAttribute("size", new THREE.BufferAttribute(data.sizes, 1));
    geom.setAttribute("offset", new THREE.BufferAttribute(data.offsets, 1));
    return geom;
  }, [data]);

  const uniforms = useMemo(
    () => ({
      pointTexture: { value: starTexture },
      uOpacity: { value: 1 },
      uTime: { value: 0 },
    }),
    [starTexture]
  );

  useFrame(({ clock }) => {
    const scrollY = window.scrollY;
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight * 1.5;
    const opacity = Math.max(0, Math.min(1, 1 - scrollY / scrollableHeight));

    if (ref.current) {
      ref.current.rotation.y += rotationSpeed.y;
      ref.current.rotation.x += rotationSpeed.x;
      ref.current.position.y = scrollY * scrollFactor;
      ref.current.material.uniforms.uOpacity.value = opacity;
      ref.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <points
      ref={ref}
      geometry={geometry}>
      <rawShaderMaterial
        vertexShader={`
            precision mediump float;
            attribute vec3 position;
            attribute vec3 color;
            attribute float size;
            attribute float offset;
            varying vec3 vColor;
  
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            uniform float uTime;
  
            void main() {
              vColor = color;
              float flicker = 0.75 + 0.25 * sin(uTime * 2.0 + offset);
              float pointSize = size * flicker;
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = pointSize * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `}
        fragmentShader={`
            precision mediump float;
            varying vec3 vColor;
            uniform sampler2D pointTexture;
            uniform float uOpacity;
  
            void main() {
              vec4 tex = texture2D(pointTexture, gl_PointCoord);
              if (tex.a < 0.05) discard;
              gl_FragColor = vec4(vColor, tex.a * uOpacity);
            }
          `}
        uniforms={uniforms}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
