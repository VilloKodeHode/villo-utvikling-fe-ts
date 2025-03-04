"use client";

// import { useRef } from "react";
import * as THREE from "three";
import { Grass } from "./grass";
import { metaData } from "./metaData";
import { Tree } from "./tree";
import { Road } from "./road";
import { Car } from "./car";
// import { Grass } from "./grass";

export const Map = () => {
  const map = new THREE.Group();
  map.add(Grass(0));

  metaData.forEach((rowData, index) => {
    const rowIndex = index + 1;
    if (rowData.type === "forest") {
      const treeRow = Grass(rowIndex);
      map.add(treeRow);

      rowData.trees?.forEach(({ tileIndex, height }) => {
        const tree = Tree(tileIndex, height);
        treeRow.add(tree);
      });
    }
    if (rowData.type === "car") {
      const roadRow = Road(rowIndex);
      rowData.vehicles?.forEach((vehicle)=> {
        const car = Car(
          vehicle.initialTileIndex,
        rowData.direction,
        vehicle.color
        )
        roadRow.add(car)
      })
      map.add(roadRow);
    }
  });
  return map;
};
