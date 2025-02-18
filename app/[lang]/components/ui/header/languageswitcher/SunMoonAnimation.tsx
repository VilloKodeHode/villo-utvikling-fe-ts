"use client"

import { useEffect } from "react";
import { gsap } from "gsap";

const SunMoonAnimation = ({ className }) => {
  useEffect(() => {
    const timeline = gsap.timeline({ delay: 1 });

    // Fade out and shrink moon
    timeline.to("#moon", {
      duration: 1.5,
      opacity: 0,
      scale: 0.8,
      ease: "power2.inOut",
    });

    // Fade in and scale up sun
    timeline.to(
      "#sun-group",
      {
        duration: 2,
        opacity: 1,
        scale: 1,
        rotate: 360, // Rotate for sun-like effect
        ease: "power2.out",
      },
      "-=1"
    );
  }, []);

  return (
    <svg
      className={`w-full h-full ${className}`}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Moon */}
      <path
        id="moon"
        d="M100 150C113.261 150 125.979 144.732 135.355 135.355C144.732 125.979 150 113.261 150 100C150 86.7392 144.732 74.0215 135.355 64.6447C125.979 55.2678 113.261 50 100 50C86.7392 50 74.0215 55.2678 64.6447 64.6447C55.2678 74.0215 50 86.7392 50 100C50 113.261 55.2678 125.979 64.6447 135.355C74.0215 144.732 86.7392 150 100 150Z"
        fill="#571dff"
      />

      {/* Sun (Hidden Initially) */}
      <g id="sun-group" transform="scale(0.5)" opacity="0">
        {/* Sun Core */}
        <circle cx="100" cy="100" r="50" fill="#ffcc00" />

        {/* Sun Rays */}
        <path d="M100 0V30" stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" />
        <path d="M100 170V200" stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" />
        <path d="M200 100H170" stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" />
        <path d="M30 100H0" stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" />
        <path d="M170 30L150 50" stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" />
        <path d="M50 150L30 170" stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" />
        <path d="M170 170L150 150" stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" />
        <path d="M50 50L30 30" stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default SunMoonAnimation;
