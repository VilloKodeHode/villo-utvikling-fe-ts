import { useEffect, useRef } from "react";
import * as THREE from "three";

const THREEBiggerSpace = ({ Theme }) => {
    const canvasRef = useRef();
    const scene = useRef();
    const camera = useRef();
    const renderer = useRef();
    const particles = useRef();
    let frame = useRef(0);

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
        renderer.current.setClearColor(Theme === "light" ? 0x571dff : 0x858ee0, 0);

        const particleCount = 1000;
        const geometry = new THREE.SphereGeometry(0.5, 16, 16);
        const colors =
            Theme === "light"
                ? [
                    0x571dff, 0x858ee0, 0x141315, 0x2e2f34, 0x383844, 0x48485b, 0xfff,
                    0xf6f3ff, 0xefe9ff, 0xe6ddff,
                ]
                : [
                    0x858ee0, 0x571dff, 0x161618, 0x2e2f34, 0x383844, 0x48485b,
                    0xfbfbfe, 0x03f4fc, 0xe9ebf9, 0xe02f7,
                ];

        particles.current = new THREE.Group();

        for (let i = 0; i < particleCount; i++) {
            const material = new THREE.MeshBasicMaterial({
                color: colors[Math.floor(Math.random() * colors.length)],
            });
            const particle = new THREE.Mesh(geometry, material);

            // Calculate positions for an evenly distributed sphere
            const phi = Math.acos(-1 + (2 * i) / particleCount);
            const theta = Math.sqrt(particleCount * Math.PI) * phi;

            particle.position.setFromSphericalCoords(0.5, phi, theta);

            particle.scale.set(0.22, 0.22, 0.22); // Adjust scale as needed

            particles.current.add(particle);
        }

        scene.current.add(particles.current);

        camera.current.position.z = 10;

        // Rotation speed
        const baseRotationSpeed = 0.00308008;
        const scrollRotationSpeed = 0.0004008;
        let totalRotationY = 0.00080008;

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
    }, [Theme, canvasRef, scene, camera, renderer, particles]);

    return <canvas ref={canvasRef} className="absolute top-0 -z-10" />;
};

export default THREEBiggerSpace;
