import { IntroSection } from "@components/molecyles/Sections";
import { PageProps } from "app/interfaces/PageProps";
import { getDictionary } from "get-dictionary";
import { ContactformSection } from "./components/ContactformSection";
import { headers } from "next/headers";

export default async function Home({ params }: PageProps) {
  const requestHeaders = await headers(); // Await headers()
  const langHeader = requestHeaders.get("x-language"); // Get language from middleware
  const lang: "no" | "en" =
    langHeader === "en" || langHeader === "no" ? langHeader : "no"; // Validate and cast

  const dictionary = await getDictionary(lang);
  const content = dictionary.contactForm;
  return (
    <>
      <IntroSection content={content} />
      <ContactformSection content={content} />
    </>
  );
}
