"use client";

import { useEffect } from "react";

export function useOpacityScroll(particles) {
useEffect(() => {
    if (!particles.current) return;

    function updateOpacity() {
      const scrollY = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - (window.innerHeight *1.5);
        
//TODO check if the numbers can be tweaked so opacity is 0 earlier:
      const opacity = Math.max(0, Math.min(1, 1 - scrollY / (scrollableHeight)));
console.log(opacity)
      particles.current.children.forEach((particle) => {
        particle.material.opacity = opacity;
      });
    }

    window.addEventListener("scroll", updateOpacity);

    updateOpacity();

    return () => window.removeEventListener("scroll", updateOpacity);
  }, []);
}