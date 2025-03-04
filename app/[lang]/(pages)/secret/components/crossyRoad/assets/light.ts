import * as THREE from "three";

export function createLights() {
  const ambientLight = new THREE.AmbientLight();

  const directionalLight = new THREE.DirectionalLight();
  directionalLight.position.set(-100, -100, 200);

  return { ambientLight, directionalLight };
}