"use client";

import * as THREE from "three";
import { tileSize } from "../page";

export const Tree = (tileIndex, height) => {
  const tree = new THREE.Group();
  tree.position.x = tileIndex * tileSize;

  // 3d model for trunk
  const trunk = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20),
    new THREE.MeshLambertMaterial({ color: 0x4d2926 })
  );
  trunk.position.z = 10;
  tree.add(trunk);

  // 3d model for crown
  const crown = new THREE.Mesh(
    // SphereGeometry works, but does not look good with the parameters
    new THREE.BoxGeometry(30, 30, height),
    new THREE.MeshLambertMaterial({ color: 0x7aa21d })
  );
  crown.position.z = height / 2 + 20;
  tree.add(crown);

  return tree;
};
