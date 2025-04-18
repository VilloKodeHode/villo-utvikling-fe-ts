"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useTheme } from "next-themes";
import { Nebula } from "./components/Nebula";
import { ArrowDownConstellation } from "./components/ArrowDownConstellation";
import { Starfield } from "./components/StarField";
import { ArrowUpConstellation } from "./components/ArrowUpConstellation";

export const TheCosmos = () => {

  return (
    <div
  className="fixed top-0 left-0 w-full h-full pointer-events-none"
>
  <Canvas
    camera={{ position: [0, 0, 0], fov: 75, far: 200 }}
    eventSource={document.body}
    eventPrefix="client"
    style={{ pointerEvents: "auto" }}
  >
    <Suspense fallback={null}>
      <ArrowDownConstellation />
      <Nebula />
      <Starfield />
      {/* <ArrowUpConstellation /> */}
    </Suspense>
  </Canvas>
</div>
  );
};
