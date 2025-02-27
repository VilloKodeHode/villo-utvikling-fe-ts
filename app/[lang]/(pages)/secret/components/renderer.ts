"use client"

import * as THREE from "three";

const Renderer = () => {
  const canvas = document.querySelector("canvas.game");

  if (!canvas) {
    throw new Error("Canvas not found");
  }

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: canvas,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight);

return renderer
};

export const renderer = Renderer();
