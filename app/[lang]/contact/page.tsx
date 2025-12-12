import { IntroSection } from "@components/molecyles/Sections";
import type { PageProps } from "@app-types/PageProps";
import { getDictionary } from "@lib/get-dictionary";
import { ContactformSection } from "./components/ContactformSection";

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
