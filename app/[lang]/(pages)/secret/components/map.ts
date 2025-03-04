"use client";

// import { useRef } from "react";
import * as THREE from "three";
import { Grass } from "./grass";
import { metaData } from "./metaData";
import { Tree } from "./tree";
import { Road } from "./road";
import { Car } from "./car";
import { clock } from "./clock";
import { maxTileIndex, minTileIndex, tileSize } from "./constants";
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
      rowData.vehicles?.forEach((vehicle) => {
        const car = Car(
          vehicle.initialTileIndex,
          rowData.direction,
          vehicle.color,
        );
        vehicle.ref = car;
        roadRow.add(car);

      });
      map.add(roadRow);
    }
  });


const animateCars = () => {
  const delta = clock.getDelta();

  // Animate vehicles
  metaData.forEach((rowData) => {
    if (rowData.type === "car") {
      const beginningOfRow = (minTileIndex - 2) * tileSize;
      const endOfRow = (maxTileIndex + 2) * tileSize;

      rowData.vehicles?.forEach(({ ref }) => {
        if (!ref) throw Error("Vehicle referanse is missing");

        if (rowData.direction) {
          ref.position.x =
            ref.position.x > endOfRow
              ? beginningOfRow
              : ref.position.x + rowData.speed * delta;
        } else {
          ref.position.x =
            ref.position.x < beginningOfRow
              ? endOfRow
              : ref.position.x - rowData.speed * delta;
        }
      });
    }
  });
};

  return {map, animateCars};
};
