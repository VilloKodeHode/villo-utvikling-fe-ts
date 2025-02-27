"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { createPlayer } from "./components/player";
import { createCamera } from "./components/camera";
import { createLights } from "./components/light";
import { Map } from "./components/map";

// Setup map
export const minTileIndex = -8;
export const maxTileIndex = 8;
export const tilesPerRow = maxTileIndex - minTileIndex + 1;
export const tileSize = 42;

export default function Home() {
  const player = useRef<THREE.Group | null>(null);
  const camera = useRef<THREE.OrthographicCamera | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const map = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!canvas.current) return;

    // Initialize Scene
    scene.current = new THREE.Scene();

    // Initialize Player
    player.current = createPlayer();

    // Initialize Camera
    camera.current = createCamera();

    // Add player to scene
    scene.current.add(player.current);

    // Lights
    const { ambientLight, directionalLight } = createLights();
    scene.current.add(ambientLight);
    scene.current.add(directionalLight);

    // Grass
    // grass.current = Grass(0);

    map.current = Map();
    // map.current.add(grass.current);

    scene.current.add(map.current);

    // Renderer
    renderer.current = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: canvas.current,
    });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setPixelRatio(window.devicePixelRatio);

    // Resize Handling
    function handleResize() {
      if (!camera.current) return;

      const size = 300;
      const newViewRatio = window.innerWidth / window.innerHeight;
      const newWidth = newViewRatio < 1 ? size : size * newViewRatio;
      const newHeight = newViewRatio < 1 ? size * newViewRatio : size;

      camera.current.left = newWidth / -2;
      camera.current.right = newWidth / 2;
      camera.current.top = newHeight / 2;
      camera.current.bottom = newHeight / -2;
      camera.current.updateProjectionMatrix();

      renderer.current?.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.current?.render(scene.current!, camera.current!);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.current?.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={canvas} className=""></canvas>
    </>
  );
}
