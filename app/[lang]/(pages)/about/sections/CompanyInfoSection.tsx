import { ThemedH3, ThemedP } from "@components/atoms/ThemedText";
import { SimpleLogoComponent } from "../../atoms/Logo";



export const CompanyInfo = ({content}) => {

  return (
    <div className="grid max-w-7xl justify-center items-center py-4 ml:pb-0 ml:pt-24 min-h-[calc(50dvh)]">
      <div className="animate-PageAppearRight">
        <div
          className={`sm:rounded-lg grid transition-colors duration-1000
              ? "bg-Villo-light-white10"
              : "bg-Villo-dark-black75"
          }`}
        >
          <div
            className={`col-span-1 ml:py-12 h-full flex flex-col justify-center items-center`}
          >
            <SimpleLogoComponent />

            <ThemedH3 className="py-5 text-bold">
            {content.title}
            </ThemedH3>
            <ThemedP className="max-w-5xl px-8 pb-5 ">
              {content.paragraphOne}
            </ThemedP>
            <ThemedP className="max-w-5xl px-8 pb-5 ">
              {content.paragraphTwo}
            </ThemedP>
            {/* <ThemedP className="max-w-5xl px-8 pb-5 ">
              {language === "Norwegian" ? "" : ""}
            </ThemedP> */}
          </div>
        </div>
      </div>
    </div>
  );
};
