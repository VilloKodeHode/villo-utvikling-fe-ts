import { useMemo } from "react";
import { Color } from "three"; // ✅ selective import
import { createStarLayer, StarLayer } from "./StarLayer";
import { ShootingStar } from "./ShootingStar";
import generateStarTexture from "./generateStarTexture";

export const Starfield = () => {
  const starTexture = useMemo(() => generateStarTexture(), []);

  const starColors = useMemo(
    () => [
      new Color(0xffffff),
      new Color(0xfff4e5),
      new Color(0xaecaff),
      new Color(0xffccaa),
      new Color(0xffaaaa),
    ],
    []
  );

  const layerOne = useMemo(
    () => createStarLayer(1000, [100, 120], starColors),
    [starColors]
  );
  const layerTwo = useMemo(
    () => createStarLayer(1000, [120, 140], starColors),
    [starColors]
  );
  const layerThree = useMemo(
    () => createStarLayer(40, [50, 70], starColors),
    [starColors]
  );

  return (
    <>
      <StarLayer
        data={layerOne}
        scrollFactor={0.005}
        starTexture={starTexture}
        rotationSpeed={{ x: 0.00003, y: 0.000016 }}
      />
      <StarLayer
        data={layerTwo}
        scrollFactor={0.002}
        starTexture={starTexture}
        rotationSpeed={{ x: 0.000015, y: 0.000008 }}
      />
      <StarLayer
        data={layerThree}
        scrollFactor={0.0005}
        starTexture={starTexture}
        rotationSpeed={{ x: 0.00008, y: 0.000012 }}
      />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
    </>
  );
};
