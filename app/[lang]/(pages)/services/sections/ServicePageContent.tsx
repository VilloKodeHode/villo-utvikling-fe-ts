import { ReadMoreButton } from "@components/atoms/Buttons";
import {
  ThemedH2,
  ThemedH3,
  ThemedH4,
  ThemedP,
} from "@components/atoms/ThemedText";
import { ComponentPropsWithParams } from "app/interfaces/PageProps";
import Link from "next/link";

export const ServicePageContent = ({
  params,
  content,
  showOnScroll,
  id = "service_section",
}: ComponentPropsWithParams) => {
  const { lang } = params;

  return (
    <section
      id={id}
      className={`w-full py-2 scroll-into-view`}>
   
      <div
        className={`flex flex-col mx-auto md:gap-10 gap-6 max-w-7xl  ${
          showOnScroll ? "opacity-0 animate-on-scroll" : ""
        }`}>
               {showOnScroll && (
               <div className="grid gap-2">
          <ThemedH2 className="font-bold text-center">
            {content?.title}
          </ThemedH2>
          <ThemedH3 className="text-center">{content?.subtitle}</ThemedH3>
        </div>
        )}
   
        <div
         data-scroll-target={showOnScroll ? false : true}
        className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {content?.cards?.map((item) => (
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
          <ReadMoreButton className="self-end">{buttonText}</ReadMoreButton>
          {/* <div className="absolute group-hover:opacity-80 opacity-0 group-hover:h-[105%] group-hover:w-[103.5%] w-0 h-0 transition-all right-1/2 translate-x-1/2 top-1/2 translate-y-[-50%] sm:rounded-lg -z-99 bg-dark-lavender" /> */}
        </div>
      </Link>
    </div>
  );
};
