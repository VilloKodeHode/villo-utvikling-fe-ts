"use client"

// import { scrollToSection } from "@logic/scrollLogic"
import { ReadMoreButton } from "./Buttons"

export const ScrollToSectionButton = ({children}) => {
    const scrollToSection = (event: React.MouseEvent , id: string) => {
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
        onClick={(event) => scrollToSection(event, "OfferSection")}
        className=""
      >
        <ReadMoreButton className="">
          {children}
        </ReadMoreButton>
      </a>
    )
}