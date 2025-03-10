import { ThemedH2, ThemedP } from "@components/atoms/ThemedText";
import { SkillIcons } from "@pages/about/sections/organisms/SkillIcons";

export const SkillsSection = async ({ content }) => {
  return (
    <section
      className={`w-screen py-20 bg-light-charcoal dark:bg-dark-onyx
      `}
    >
      <div className="px-4 m-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center text-center">
          <ThemedH2 className="">{content.title} </ThemedH2>
          <ThemedP reversedColors={true} className="max-w-2xl mt-2">{content.paragraph}</ThemedP>
        </div>
        <SkillIcons content={content} />
      </div>
    </section>
  );
};
