import { getDictionary } from "get-dictionary";
import {
  AltIntroSection,
  TextAndImageSection,
} from "@components/molecyles/Sections";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectSection } from "./sections/ProjectSection";
import { PageProps } from "app/interfaces/PageProps";
import { headers } from "next/headers";

export default async function Home({ params }: PageProps) {
  const requestHeaders = await headers(); // Await headers()
  const langHeader = requestHeaders.get("x-language"); // Get language from middleware
  const lang: "no" | "en" =
    langHeader === "en" || langHeader === "no" ? langHeader : "no"; // Validate and cast

  const dictionary = await getDictionary(lang);
  return (
    <>
      <AltIntroSection content={dictionary.companyInfo} />
      <TextAndImageSection content={dictionary.introInfo} />
      <SkillsSection content={dictionary.skills} />
      <ProjectSection content={dictionary.personal_projects} />
    </>
  );
}
