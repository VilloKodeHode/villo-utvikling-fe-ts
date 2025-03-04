"use client";

import * as THREE from "three";
import { maxTileIndex, minTileIndex, tileSize } from "./constants";
import { clock } from "./clock";
import { metaData } from "./metaData";

export const Car = (initialTileIndex, direction, color) => {
  const car = new THREE.Group();
  car.position.x = initialTileIndex * tileSize;
  if (!direction) {
    car.rotation.z = Math.PI;
  }

  const main = new THREE.Mesh(
    new THREE.BoxGeometry(60, 30, 15),
    new THREE.MeshLambertMaterial({ color })
  );
  main.position.z = 12;
  car.add(main);

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(33, 24, 12),
    new THREE.MeshLambertMaterial({ color: "white" })
  );
  cabin.position.x = -6;
  cabin.position.z = 25.5;
  car.add(cabin);

  const createWheel = () => {
    const wheel = new THREE.Mesh(
      new THREE.BoxGeometry(12, 6, 12),
      new THREE.MeshLambertMaterial({ color: 0x333333 })
    );
    return wheel;
  };

  const frontLeftWheel = createWheel();
  frontLeftWheel.position.x = 14;
  frontLeftWheel.position.z = 6;
  frontLeftWheel.position.y = 14;
  car.add(frontLeftWheel);

  const frontRightWheel = createWheel();
  frontRightWheel.position.x = 14;
  frontRightWheel.position.z = 6;
  frontRightWheel.position.y = -14;
  car.add(frontRightWheel);

  const backLeftWheel = createWheel();
  backLeftWheel.position.x = -14;
  backLeftWheel.position.z = 6;
  backLeftWheel.position.y = 14;
  car.add(backLeftWheel);

  const backRightWheel = createWheel();
  backRightWheel.position.x = -14;
  backRightWheel.position.z = 6;
  backRightWheel.position.y = -14;
  car.add(backRightWheel);

  return car;
};

export const animateVehicle = () => {
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
            ref.position.x > endOfRow
              ? beginningOfRow
              : ref.position.x + rowData.speed * delta;
        }
      });
    }
  });
};
