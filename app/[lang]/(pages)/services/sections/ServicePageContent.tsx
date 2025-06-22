import { useTranslations } from "next-intl";
import { ReadMoreButton } from "@components/atoms/Buttons";
import {
  ThemedH2,
  ThemedH3,
  ThemedH4,
  ThemedP,
} from "@components/atoms/ThemedText";
import Link from "next/link";

export const ServicePageContent = ({
  showOnScroll = false,
  id = "service_section",
}) => {
  const t = useTranslations("service_card_section");
  const lang = t("lang"); // Store lang in your messages if needed for links
  const cards = t.raw("cards"); // expects an array in your messages file

  return (
    <section
      id={id}
      className={`w-full py-2 scroll-into-view`}>
      <div
        className={`flex flex-col mx-auto md:gap-10 gap-6 max-w-7xl  ${
          showOnScroll ? "opacity-0 animate-on-scroll" : ""
        }`}>
        <div className="grid gap-2">
          <ThemedH2 className="font-bold text-center">
            {t("title")}
          </ThemedH2>
          <ThemedH3 className="text-center">{t("subtitle")}</ThemedH3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {cards.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              text={item.text}
              href={item.href.replace("{lang}", lang)}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServiceCard = ({ title, text, href, buttonText }) => {
  return (
    <div className="">
      <Link
        href={href}
        className="cursor-pointer">
        <div
          className={`relative z-[99] max-w-sm md:mt-0 md:col-span-1 group grid gap-2 min-h-[240px] p-6 glass-morphism interactive-box`}>
          <ThemedH4
            className={`font-bold z-10 max-w-fit transition-colors dark:group-hover:text-dark-lavender ease-linear group-hover:text-light-violet`}>
            {title}
          </ThemedH4>
          <ThemedP>{text}</ThemedP>
          <ReadMoreButton>{buttonText}</ReadMoreButton>
        </div>
      </Link>
    </div>
  );
};
