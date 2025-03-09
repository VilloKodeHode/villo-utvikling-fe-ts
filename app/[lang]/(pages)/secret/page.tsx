"use client";

import { Canvas } from "@react-three/fiber";
import { Dice } from "./components/Dice";
import { PerspectiveCamera } from "@react-three/drei";

export default function Home() {
 

  return (
    <div className="h-screen w-full">
      <Canvas id="dice-container">
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={0.5} decay={0.1} intensity={Math.PI} />
          <Dice position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
