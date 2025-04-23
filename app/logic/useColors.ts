"use client"
import * as THREE from "three";
import { useEffect } from "react";

export const useColors = (particles, theme) => {
      useEffect(() => {
        if (particles.current) {
          const colors =
            theme === "light"
              ? [
                0x571dff,
                0x858ee0,
                0x141315,
                0x2e2f34,
                0x383844,
                0x48485b,
                0xfff,
                0xf6f3ff,
                0xefe9ff,
                0xe6ddff,
              ]
              : [
                0x858ee0,
                0x571dff,
                0x161618,
                0x2e2f34,
                0x383844,
                0x48485b,
                0xfbfbfe,
                0x03f4fc,
                0xe9ebf9,
                0xe02f7,
              ];
    
          particles.current.children.forEach((particle) => {
            particle.material.color = new THREE.Color(
              colors[Math.floor(Math.random() * colors.length)]
            );
          });
    
        }
    
      }, [theme, particles]);
}