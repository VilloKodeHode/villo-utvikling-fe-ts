import { useTranslations } from "next-intl";
import Link from "next/link";
import { ThemedH1, ThemedP, ThemedPLarge } from "@components/atoms/ThemedText";
import { ArrowCTA } from "@components/atoms/Buttons";
import { ScrollToSectionButton } from "@components/atoms/ScrolltoSectionButton";

export const HeroSection = () => {
  const t = useTranslations("heroSection");
  const lang = t("lang"); // Store lang in your messages if needed for links

  return (
    <section
      className="grid items-center max-w-6xl justify-center w-full min-h-[calc(100dvh-160px)]"
      id="HeroSection">
      <div className="animate-page-appear-right">
        <div className="grid sm:gap-8 gap-4">
          <ThemedP className="w-fit">{t("slogan")}</ThemedP>
          <ThemedH1>{t("title")}</ThemedH1>
          <ThemedPLarge>{t("subtitle")}</ThemedPLarge>
          <div className="grid justify-start items-center grid-flow-col ml:gap-8 gap-4">
            <Link
              aria-label={t("ctaAriaLabel")}
              className="h-fit"
              href={`/${lang}/contact`}>
              <ArrowCTA>{t("cta")}</ArrowCTA>
            </Link>
            <ScrollToSectionButton>{t("ctaTwo")}</ScrollToSectionButton>
          </div>
        </div>
      </div>
    </section>
  );
};
