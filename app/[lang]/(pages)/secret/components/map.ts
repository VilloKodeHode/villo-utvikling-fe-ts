"use client";

// import { useRef } from "react";
import * as THREE from "three";
import { Grass } from "./grass";
import { metaData } from "./metaData";
import { Tree } from "./tree";
// import { Grass } from "./grass";

export const Map = () => {
  const map = new THREE.Group();
  map.add(Grass(0));

  metaData.forEach((rowData, index) => {
    const rowIndex = index + 1;
    if (rowData.type === "forest") {
      const row = Grass(rowIndex);
      map.add(row);

      rowData.trees.forEach(({ tileIndex, height }) => {
        const tree = Tree(tileIndex, height);
        row.add(tree);
      });
    }
  });
  return map;
};
