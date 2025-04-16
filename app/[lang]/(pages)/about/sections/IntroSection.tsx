import { ThemedH2, ThemedH3, ThemedP } from "@components/atoms/ThemedText";
import { ComponentProps } from "@interfaces/PageProps";
import Image from "next/image";

export const IntroSection = ({ content }: ComponentProps) => {
  return (
    <div className="flex flex-col max-w-7xl gap-10 justify-center text-center items-center min-h-screen">
      <ThemedH2 className="font-bold">{content?.title}</ThemedH2>
      <div className="animate-PageAppearRight">
        <div
          className={`sm:rounded-lg grid min-h-[70dvh] lg:grid-cols-2 transition-colors duration-1000 bg-light-mist dark:bg-dark-slate`}
        >
          <div
            className={`col-span-1 py-12 min-h-[30dvh] flex flex-col justify-center items-center`}
          >
            <ThemedH3 className="py-5 text-bold">
              Joakim Villo
            </ThemedH3>
            <ThemedP className="max-w-md px-8 pb-5">
              {content?.paragraph}
            </ThemedP>
          </div>
          <div className="col-span-1">
            <Image
              src="/images/portraits/joakim.webp"
              width={1200}
              height={1200}
              alt="Bilde av Joakim Villo"
              className="object-cover w-full h-full rounded-b-lg lg:rounded-r-lg lg:rounded-b-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


