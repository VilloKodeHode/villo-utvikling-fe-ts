"use client";

//! not in used yet (implemented directly into the code)
import { useEffect } from "react";

export function useCosmosScroll(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const updateOpacity = () => {
      const scrollY = window.scrollY;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight * 1.5;
      const opacity = Math.max(0, Math.min(1, 1 - scrollY / scrollableHeight));

      if (ref.current.material) {
        // Single mesh/points
        ref.current.material.opacity = opacity;
      } else if (ref.current.children) {
        // Group of meshes
        ref.current.children.forEach((obj) => {
          if (obj.material) obj.material.opacity = opacity;
        });
      }
    };

    window.addEventListener("scroll", updateOpacity);
    updateOpacity();

    return () => window.removeEventListener("scroll", updateOpacity);
  }, [ref]);
}