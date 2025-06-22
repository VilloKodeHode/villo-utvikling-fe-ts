import { useTranslations } from "next-intl";
import { ThemedH2, ThemedP } from "@components/atoms/ThemedText";
import { SkillIcons } from "@pages/about/sections/organisms/SkillIcons";

export const SkillsSection = () => {
  const t = useTranslations("about.skills");
  const skills = t.raw("skills"); // expects an array in your messages file
  return (
    <section
      className={`w-screen py-20 glass-morphism-section
      `}
    >
      <div className="px-4 m-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center text-center">
          <ThemedH2 className="">{t("title")} </ThemedH2>
          <ThemedP className="max-w-2xl mt-2">{t("paragraph")}</ThemedP>
        </div>
        <SkillIcons skills={skills} />
      </div>
    </section>
  );
};
