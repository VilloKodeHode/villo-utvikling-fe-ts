import { useEffect, useRef } from "react";
import * as THREE from "three";

export const THREECube = () => {
    const canvasRef = useRef();
    const scene = useRef();
    const camera = useRef();
    const renderer = useRef();
    const sphere = useRef();
    const frame = useRef(0);

    useEffect(() => {
        scene.current = new THREE.Scene();
        camera.current = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.current.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);

        // Create a wireframe material
        const wireframeMaterial = new THREE.LineBasicMaterial({
            color: 0x858ee0,
        });

        // Create a wireframe geometry based on the sphere geometry
        const geometry = new THREE.SphereGeometry(1, 32, 32); // Adjust the parameters as needed
        const wireframeGeometry = new THREE.WireframeGeometry(geometry);

        sphere.current = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
        scene.current.add(sphere.current);

        camera.current.position.z = 5;

        const animate = () => {
            frame.current = requestAnimationFrame(animate);

            sphere.current.rotation.x += 0.009;
            sphere.current.rotation.y += 0.011;

            renderer.current.render(scene.current, camera.current);
        };

        animate();

        return () => {
            cancelAnimationFrame(frame.current);
        };
    }, []);

    return <canvas className="" ref={canvasRef} />;
};
