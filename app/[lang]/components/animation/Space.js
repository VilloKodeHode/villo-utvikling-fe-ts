"use client"

// import { useTheme } from "@logic/useTheme";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const THREESpace = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
      const htmlElement = document.documentElement;
      setTheme(htmlElement.getAttribute("data-theme"));

      const observer = new MutationObserver(()=> {
          setTheme(htmlElement.getAttribute("data-theme"));
      })

      observer.observe(htmlElement, {
          attributes: true,
          attributeFilter: ["data-theme"],
      })

      return () => observer.disconnect();

  }, [theme]);
  const canvasRef = useRef();
  const scene = useRef();
  const camera = useRef();
  const renderer = useRef();
  const particles = useRef();
  let frame = useRef(0);
  const particleCount = 1500;

  useEffect(() => {
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.current.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(0.05, 16, 16);

    particles.current = new THREE.Group();

    for (let i = 0; i < particleCount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
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
    const baseRotationSpeed = 0.00008008;
    const scrollRotationSpeed = 0.0004008;
    let totalRotationY = 0.00480008;

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
      const scrollFactor = 0.002;
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

  useEffect(() => {
    if (particles.current) {
      const colors =
        theme === "light"
          ? [
              0x571dff,
              0x858ee0,
              0x141315,
              0x2e2f34,
              0x383844,
              0x48485b,
              0xfff,
              0xf6f3ff,
              0xefe9ff,
              0xe6ddff,
            ]
          : [
              0x858ee0,
              0x571dff,
              0x161618,
              0x2e2f34,
              0x383844,
              0x48485b,
              0xfbfbfe,
              0x03f4fc,
              0xe9ebf9,
              0xe02f7,
            ];

      particles.current.children.forEach((particle) => {
        particle.material.color = new THREE.Color(
          colors[Math.floor(Math.random() * colors.length)]
        );
      });

      renderer.current.setClearColor(
        theme === "light" ? 0x571dff : 0x858ee0,
        0
      );
    }
  }, [theme]);

  return (
    <div className="absolute top-0 -z-20 transition-all">
      <canvas ref={canvasRef} className={`transition-all duration-500 ${theme === "light"
        ? "shadow-[0_20px_60px_1px_#fefdff] opacity-[10%]"
        : "shadow-[0_20px_60px_1px_#161618] opacity-100"
        }`} />
    </div>
  )


};

export default THREESpace;
