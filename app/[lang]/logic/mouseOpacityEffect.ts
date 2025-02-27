"use client";

import { useEffect } from "react";

export const MouseOpacityEffect = () => {
  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const elements = document.querySelectorAll(".fade-on-hover");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distanceX = Math.abs(
          event.clientX - (rect.left + rect.width / 2)
        );
        const distanceY = Math.abs(
          event.clientY - (rect.top + rect.height / 2)
        );
        const maxDistance = Math.max(rect.width, rect.height);

        // Calculate opacity based on distance (closer = more visible)
        const opacity = Math.max(
          0.2,
          1 - (distanceX + distanceY) / (maxDistance * 1.5)
        );
        (element as HTMLElement).style.opacity = opacity.toString();
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};
