import { CanvasTexture, LinearFilter, RGBAFormat } from "three";

export default function generateStarTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.2, "rgba(255,255,255,0.6)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.format = RGBAFormat;
  texture.transparent = true;

  return texture;
}
