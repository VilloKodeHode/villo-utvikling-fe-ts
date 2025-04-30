"use client";

// import { scrollToSection } from "@logic/scrollLogic"
import { CTAButton } from "./Buttons";

export const ScrollToSectionButton = ({ children }) => {
  const scrollToSection = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const targetPosition =
        element.getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight / 2 +
        element.getBoundingClientRect().height / 2;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <a
      href="#service_section"
      onClick={(event) => scrollToSection(event, "service_section")}
      className="">
      <CTAButton>{children}</CTAButton>
    </a>
  );
};
