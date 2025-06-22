import { useTranslations } from "next-intl";
import Link from "next/link";
import { ThemedH2, ThemedH4, ThemedP } from "@components/atoms/ThemedText";
import { ReadMoreButton } from "@components/atoms/Buttons";

export const OfferSection = () => {
  const t = useTranslations("offerSection");
  const offers = t.raw("offers"); // expects an array in your messages file
  return (
    <section
      id="OfferSection"
      className={`w-screen overflow-x-hidden py-12 sm:px-6 px-4 lg:px-12 bg-light-fog dark:bg-dark-onyx`}
    >
      <div className="mx-auto max-w-7xl ">
        <div className="text-center">
          <ThemedH2 className="text-center">{t("title")}</ThemedH2>
        </div>
        <div className="flex justify-center mt-10 opacity-0 animate-on-scroll">
          <div className="flex flex-wrap items-center justify-center md:gap-6">
            {offers.map((offer, idx) => (
              <OfferSectionCard key={offer.href + idx} {...offer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const OfferSectionCard = ({ title, text, href }) => {
  const t = useTranslations("offerSection");
  return (
    <div className="mt-5 transition-all duration-300 md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default">
      <div
        className={`overflow-hidden max-w-sm transition-transform duration-300 shadow-sm sm:rounded-lg`}
      >
        <div
          className={`grid gap-2 sm:gap-4 md:gap-6 md:min-h-[131px] transition-colors duration-300
              bg-light-cloud group-hover:bg-light-mist
              dark:bg-dark-slate dark:group-hover:bg-dark-shadow p-6 sm:p-8 md:p-12`}
        >
          <ThemedH4 className={`font-bold max-w-fit `}>{title}</ThemedH4>
          <div className="mt-2">
            <ThemedP className={``}>{text}</ThemedP>
          </div>
          <Link
            aria-label="check out"
            href={href}
            className="w-fit"
          >
            <ReadMoreButton>{t("readMore")}</ReadMoreButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
