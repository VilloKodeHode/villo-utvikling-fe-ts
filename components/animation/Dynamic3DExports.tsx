"use client";
import dynamic from "next/dynamic";

// Prevents Three.js from loading on routes that don’t need it
export const DynamicTheCosmos = dynamic(
  () => import("./TheCosmos").then((mod) => mod.TheCosmos),
  {
    ssr: false,
    loading: () => null,
  }
);

export const DynamicFloatingArrowUp = dynamic(
  () => import("./components/ArrowUpConstellation"),
  {
    ssr: false,
    loading: () => null,
  }
);
