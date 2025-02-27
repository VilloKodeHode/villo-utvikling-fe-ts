"use client";

import * as THREE from "three";
import { tileSize, tilesPerRow } from "./constants";

export const Road = (rowIndex) => {
  const road = new THREE.Group();
  road.position.y = rowIndex * tileSize;

  const foundation = new THREE.Mesh(
    new THREE.PlaneGeometry(tilesPerRow * tileSize, tileSize),
    new THREE.MeshLambertMaterial({ color: 0x454a59 })
  );
  road.add(foundation);

  //TODO fix the look of this if I want a roadLine between lanes
  //   const roadLine = new THREE.Mesh(
  //     new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize/16),
  //     new THREE.MeshLambertMaterial({ color: 0x00FFFF00 })
  //   );
  //   roadLine.position.z = 1;
  //   roadLine.position.y = tileSize/2;
  //   road.add(roadLine);

  return road;
};
