import { EmploymentSection } from "./sections/EmploymentSection";
import { ClientsSection } from "./sections/ClientSection";
import { IntroSection } from "@components/molecyles/Sections";
import { TestemonialsSection } from "./sections/TestemonialsSection";

export default function Home() {
  //TODO fix page layout here
  return (
    <>
      <IntroSection />
      <ClientsSection />
      <EmploymentSection />
      <TestemonialsSection />
      {/* <LetsGoCTA
        type="email"
        engText="Make me you coworker!"
        norText="Få meg som medarbeider!"
        href="/contact"
      >
        {language === "Norwegian" ? "Kontakt meg" : "Contact me"}
      </LetsGoCTA> */}
    </>
  );
}
