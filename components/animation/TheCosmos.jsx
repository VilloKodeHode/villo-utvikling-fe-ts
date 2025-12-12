"use client";

import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
// import { Nebula } from "./components/Nebula";
// import { ArrowDownConstellation } from "./components/ArrowDownConstellation";
// import { Starfield } from "./components/StarField";

const ArrowDownConstellation = dynamic(
  () =>
    import("./components/ArrowDownConstellation").then(
      (mod) => mod.ArrowDownConstellation
    ),
  { ssr: false }
);

const Starfield = dynamic(
  () => import("./components/StarField").then((mod) => mod.Starfield),
  { ssr: false }
);

const Nebula = dynamic(
  () => import("./components/Nebula").then((mod) => mod.Nebula),
  { ssr: false }
);

export const TheCosmos = () => {
  const pathname = usePathname();

  const shouldRender = pathname !== "/";

  if (!shouldRender) return null;
  return (
    <div className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none animate-cosmos-appear">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75, far: 200 }}
        eventSource={document.body}
        eventPrefix="client"
        style={{ pointerEvents: "auto" }}>
        <Suspense fallback={null}>
          <ArrowDownConstellation />
          <Nebula />
          <Starfield />
        </Suspense>
      </Canvas>
    </div>
  );
};
