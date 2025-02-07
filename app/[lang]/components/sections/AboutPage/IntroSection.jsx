import { ThemedH2, ThemedH3, ThemedP } from "@components/atoms/ThemedText";
import Image from "next/image";


export const IntroSection = ({content}) => {

  return (
    <div className="grid max-w-7xl justify-center text-center items-center min-h-[calc(100dvh-144px)]">
      <ThemedH2 className="py-4">
        {content.title}
      </ThemedH2>
      <div className="animate-PageAppearRight">
        <div
          className={`sm:rounded-lg grid min-h-[70dvh] lg:grid-cols-2 transition-colors duration-1000 bg-light-white10 dark:bg-dark-black75`}
        >
          <div
            className={`col-span-1 py-12 min-h-[30dvh] text-left flex flex-col justify-center items-center`}
          >

            <ThemedH3 className="py-5 text-left text-bold">
              Joakim Villo
            </ThemedH3>
            <ThemedP className="max-w-md px-8 pb-5 text-center">
              {content.paragraph}
            </ThemedP>
          </div>
          <div className="col-span-1">
            <Image
              src="/images/portraits/joakim.webp"
              width={1200}
              height={1200}
              alt="Tønsberg brygge"
              className="object-cover w-full h-full rounded-b-lg lg:rounded-r-lg lg:rounded-b-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
