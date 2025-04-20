"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Nebula } from "./components/Nebula";
import { ArrowDownConstellation } from "./components/ArrowDownConstellation";
import { Starfield } from "./components/StarField";

export const TheCosmos = () => {

  return (
    <div
  className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none"
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
