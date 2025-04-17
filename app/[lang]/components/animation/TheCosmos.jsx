"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useTheme } from "next-themes";
import { Nebula } from "./components/Nebula";
import { ArrowDownConstellation } from "./components/ArrowDownConstellation";
import { ArrowUpContellation } from "./components/ArrowUpConstellation";
import { Starfield } from "./components/StarField";

export const TheCosmos = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full -z-20 transition-all ${
        theme === "light" ? "opacity-5" : "opacity-80"
      }`}
    >
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75, far: 200 }}
        eventSource={document.body}
        eventPrefix="client"
        style={{ pointerEvents: "auto" }} 
      >
        <Suspense fallback={null}>
          {/* <ArrowUpContellation /> */}
          <ArrowDownConstellation />
          <Nebula />
          <Starfield />
        </Suspense>
      </Canvas>
    </div>
  );
};
