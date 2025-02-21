import { ReadMoreButton } from "@components/atoms/Buttons";
import { ThemedH2, ThemedH4, ThemedP } from "@components/atoms/ThemedText";
import Link from "next/link";

export const ServicePageContent = async ({
  params,
  content,
  showOnScroll,
  id = "service_section",
}) => {
  return (
    <section
      id={id}
      className={`w-full overflow-x-hidden scroll-into-view py-12 sm:px-6 px-4 lg:px-12`}
    >
      <div
        className={`mx-auto flex flex-col gap-10 max-w-7xl  ${
          showOnScroll ? "opacity-0 animate-on-scroll" : ""
        }`}
      >
        <ThemedH2 className="font-bold text-center">
          {params.lang === "no"
            ? "Villo Utvikling tilbyr:"
            : "Villo Development offers:"}
        </ThemedH2>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {content.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              text={item.text}
              href={item.href.replace("{lang}", params.lang)}
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
    <div>
      <div
        className={`relative z-99 max-w-sm shadow-sm sm:rounded-lg transition-all ease-linear md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default grid gap-2 min-h-[240px] bg-light-cloud group-hover:bg-light-mist dark:bg-dark-onyx dark:group-hover:bg-dark-shadow p-6`}
      >
        <ThemedH4
          className={`font-bold z-10 max-w-fit transition-colors dark:group-hover:text-dark-lavender ease-linear group-hover:text-light-violet`}
        >
          {title}
        </ThemedH4>
        <ThemedP>{text}</ThemedP>
        <ReadMoreButton>
          <Link href={href} className="w-fit">
            {buttonText}
          </Link>
        </ReadMoreButton>
        {/* <div className="absolute group-hover:opacity-80 opacity-0 group-hover:h-[105%] group-hover:w-[103.5%] w-0 h-0 transition-all right-1/2 translate-x-1/2 top-1/2 translate-y-[-50%] sm:rounded-lg -z-99 bg-dark-lavender" /> */}
      </div>
    </div>
  );
};
