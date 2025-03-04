import * as THREE from "three";

export const metaData = [
  {
    type: "car",
    direction: false,
    speed: 188,
    vehicles: [
      {
        initialTileIndex: -4,
        color: 0xbdb638,
        ref: <any>null,
      },
      {
        initialTileIndex: -1,
        color: 0x78b14b,
        ref: <any>null,
      },
      {
        initialTileIndex: 4,
        color: 0xa52523,
        ref: <any>null,
      },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -5, height: 50 },
      { tileIndex: 0, height: 30 },
      { tileIndex: 3, height: 50 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 125,
    vehicles: [
      {
        initialTileIndex: -4,
        color: 0x78b14b,
        ref: <any>null,
      },
      {
        initialTileIndex: 0,
        color: 0xbdb638,
        ref: <any>null,
      },
      {
        initialTileIndex: 5,
        color: 0xbdb638,
        ref: <any>null,
      },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -8, height: 30 },
      { tileIndex: -3, height: 50 },
      { tileIndex: 2, height: 30 },
    ],
  },
];
