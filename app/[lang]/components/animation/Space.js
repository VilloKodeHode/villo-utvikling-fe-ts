"use client";

import { useOpacityScroll } from "@logic/scrollOpacity";
import { useColors } from "@logic/useColors";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const THREESpace = () => {
  const { theme } = useTheme();
  const canvasRef = useRef();
  const scene = useRef();
  const camera = useRef();
  const renderer = useRef();
  const particles = useRef();
  let frame = useRef(0);
  const particleCount = 2500;

  useEffect(() => {
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    renderer.current = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setClearColor(0x000000, 0);

    const geometry = new THREE.SphereGeometry(0.05, 16, 16);

    particles.current = new THREE.Group();

    for (let i = 0; i < particleCount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1,
      });
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.3) * 35,
        (Math.random() - 0.3) * 35,
        (Math.random() - 0.3) * 35
      );
      particle.scale.set(0.3, 0.3, 0.3);

      particles.current.add(particle);
    }

    scene.current.add(particles.current);

    camera.current.position.z = 10;

    // Rotation speed
    const baseRotationSpeed = 0.00008;
    const scrollRotationSpeed = 0.0002;
    let totalRotationY = 0.00008;

    function handleResize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.current.aspect = newWidth / newHeight;
      camera.current.updateProjectionMatrix();

      renderer.current.setSize(newWidth, newHeight);
    }

    window.addEventListener("resize", handleResize);

    function animate() {
      frame.current = requestAnimationFrame(animate);

      // Continuous rotation around Y-axis
      totalRotationY += baseRotationSpeed;
      particles.current.rotation.y = totalRotationY;

      // Parallax scrolling effect
      const scrollFactor = 0.001;
      particles.current.position.y = window.scrollY * scrollFactor;

      // Additional rotation when scrolling
      particles.current.rotation.x = window.scrollY * scrollRotationSpeed;

      renderer.current.render(scene.current, camera.current);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frame.current);
    };
  }, [canvasRef, scene, camera, renderer, particles]);

  useOpacityScroll(particles);
  useColors(particles, theme);

  return (
    <div className="fixed top-0 -z-20 transition-all ">
      <canvas
        ref={canvasRef}
        className={`transition-all opacity-scroll duration-500 ${
          theme === "light"
            ? "opacity-5"
            : ""
        }`}
      />
    </div>
    // <div/>
    // </div>
  );
};

export default THREESpace;
