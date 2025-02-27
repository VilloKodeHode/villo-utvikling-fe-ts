"use client";

import * as THREE from "three";
import { tileSize, tilesPerRow } from "../page";

export const Grass = (rowIndex) => {
  const grass = new THREE.Group();
  grass.position.y = rowIndex * tileSize;

  const foundation = new THREE.Mesh(
    new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
    new THREE.MeshLambertMaterial({ color: 0xbaf455 })
  );
  foundation.position.z = 1.5;
  grass.add(foundation);

  return grass;
};
