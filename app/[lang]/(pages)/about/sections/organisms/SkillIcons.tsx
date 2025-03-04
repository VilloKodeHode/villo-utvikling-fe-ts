"use client";

import { ThemedP } from "@components/atoms/ThemedText";
import Image from "next/image";
import anime from "animejs";
import { useEffect, useRef } from "react";

export const SkillIcons = ({ content }) => {
  const iconsContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = iconsContainerRef.current;
    if (!element) return;

    const observer = new MutationObserver(() => {
      if (element.classList.contains("scroll-into-view")) {
        anime({
          targets: element.children,
          translateY: [-20, 0],
          opacity: [0, 1],
          scale: [
            { value: 1.2, easing: "easeOutSine", duration: 500 },
            { value: 1, easing: "easeInOutQuad", duration: 1200 },
          ],
          delay: anime.stagger(100, { start: 100 }),
          duration: 500,
          easing: "easeOutExpo",
        });
        observer.disconnect();
      }
    });

    observer.observe(element, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={`relative flex justify-center mt-10`}>
        <div
          ref={iconsContainerRef}
          className={`flex gap-8 animate-on-scroll opacity-0 flex-wrap justify-center transition-colors duration-1000`}
        >
          {content?.skills.map((skill) => (
            <div key={skill.alt}>
              <figure
                className={`relative  z-20 hover:scale-95 transition-all flex justify-center p-6 w-36 h-full rounded-sm shadow-lg bg-light-cloud hover:bg-light-mist dark:bg-dark-slate dark:hover:bg-dark-shadow
                group`}
              >
                <Image
                  src={`/images/skills/${skill.logo}-logo.png`}
                  className={`relative z-10 w-[${
                    skill.options.width
                  }px] transition aspect-auto m-auto ${
                    skill.options.colored
                      ? "saturate-[70%] group-hover:saturate-100"
                      : "contrast-[85%] hover:contrast-100"
                  }  group-hover:scale-125`}
                  alt="html logo"
                  height={skill.options.width * 1.5}
                  width={skill.options.width * 1.5}
                />
                <div className="absolute translate-x-1/2 translate-y-1/2 rounded-full -z-50 group-hover:scale-125 bottom-1/2 right-1/2" />
                <span className="absolute top-0 font-bold text-center transition-all translate-x-1/2 opacity-0 select-none -z-10 w-max group-hover:opacity-100 group-hover:-top-6 right-1/2">
                  <ThemedP>{skill.name}</ThemedP>
                </span>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
