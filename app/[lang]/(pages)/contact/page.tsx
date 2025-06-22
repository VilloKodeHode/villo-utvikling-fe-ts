import { IntroSection } from "@components/molecyles/Sections";
import { PageProps } from "app/interfaces/PageProps";
import { getDictionary } from "get-dictionary";
import { ContactformSection } from "./components/ContactformSection";

export const metadata = {
  title: "Kontakt Villo Utvikling",
  description:
    "Ta kontakt med Villo Utvikling for et uforpliktende tilbud på webutvikling, design eller samarbeid.",
};

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const content = dictionary.contactForm;
  return (
    <>
      <IntroSection content={content} />
      <ContactformSection content={content} />
    </>
  );
}
