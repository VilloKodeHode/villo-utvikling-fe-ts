import { SimpleLogoComponent } from "@components/atoms/Logo";
import { ThemedH1, ThemedP } from "@components/atoms/ThemedText";
import { ComponentProps } from "@interfaces/PageProps";


export const CompanyInfo = ({ content }: ComponentProps) => {

  return (
    <section className="grid max-w-7xl justify-center items-center min-h-[calc(50dvh)]">
      <div className="animate-Page-appear-right">
        <div
          className={`sm:rounded-lg grid transition-colors duration-1000
          `}
        >
          <div
            className={`h-full flex flex-col`}
          >
            <SimpleLogoComponent />

            <ThemedH1 className="">{content?.title}</ThemedH1>
            <ThemedP className="">
              {content?.paragraphOne}
            </ThemedP>
            <ThemedP className="">
              {content?.paragraphTwo}
            </ThemedP>
            {/* <ThemedP className="max-w-5xl px-8 pb-5 ">
              {language === "Norwegian" ? "" : ""}
            </ThemedP> */}
          </div>
        </div>
      </div>
    </section>
  );
};
