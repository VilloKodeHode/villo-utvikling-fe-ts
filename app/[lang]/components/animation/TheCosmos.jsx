"use client";

import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import generateStarTexture from "./components/generateStarTexture";
import { createStarLayer, StarLayer } from "./components/StarLayer";
import { ShootingStar } from "./components/ShootingStar";

const Starfield = () => {
  const starTexture = useMemo(() => generateStarTexture(), []);

  const starColors = useMemo(
    () => [
      new THREE.Color(0xffffff),
      new THREE.Color(0xfff4e5),
      new THREE.Color(0xaecaff),
      new THREE.Color(0xffccaa),
      new THREE.Color(0xffaaaa),
    ],
    []
  );

  const layerOne = useMemo(
    () => createStarLayer(1500, [100, 120], starColors),
    [starColors]
  );
  const layerTwo = useMemo(
    () => createStarLayer(1500, [120, 140], starColors),
    [starColors]
  );
  const layerThree = useMemo(
    () => createStarLayer(20, [50, 70], starColors),
    [starColors]
  );

  return (
    <>
      <StarLayer
        data={layerOne}
        scrollFactor={0.05}
        starTexture={starTexture}
        rotationSpeed={{ x: 0.00003, y: 0.000016 }}
      />
      <StarLayer
        data={layerTwo}
        scrollFactor={0.02}
        starTexture={starTexture}
        rotationSpeed={{ x: 0.000015, y: 0.000008 }}
      />
      <StarLayer
        data={layerThree}
        scrollFactor={0.002}
        starTexture={starTexture}
        rotationSpeed={{ x: 0.00003, y: 0.000012 }}
      />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
    </>
  );
};

export const TheCosmos = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full -z-20 pointer-events-none transition-all ${
        theme === "light" ? "opacity-5" : "opacity-100"
      }`}
    >
      <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
        <Starfield />
      </Canvas>
    </div>
  );
};
