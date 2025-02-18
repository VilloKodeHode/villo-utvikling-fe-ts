import Link from "next/link";
import { ThemedH1, ThemedH5, ThemedP } from "@components/atoms/ThemedText";
import { ArrowCTA } from "@components/atoms/Buttons";
import { ScrollToSectionButton } from "@components/atoms/ScrolltoSectionButton";
import { PageProps } from "@interfaces/PageProps";

export const HeroSection = async ({ params }: PageProps) => {
  return (
    <>
      <div className="flex justify-center w-full h-full">
        <section
          className=" max-w-6xl z-10 flex items-center justify-center w-full min-h-[calc(100dvh-160px)] bg-center bg-cover"
          id="HeroSection"
        >
          <div className="max-w-6xl animate-Page-appear-right">
            <div className="relative z-50 text-left">
              <ThemedP className={`mb-8 text-left w-fit`}>
                {params.lang === "no"
                  ? "Fører ditt konsept til realitet"
                  : "Bringing your consept to reality"}
              </ThemedP>
              <ThemedH1 className="mb-8">
                <span className={``}>
                  {params.lang === "no"
                    ? "Nettsider for små og mellomstore bedrifter og klubber"
                    : "Websites for small and medium-sized businesses and clubs"}
                </span>{" "}
              </ThemedH1>
              <ThemedH5 className="mb-8 font-normal text-left">
                {params.lang === "no"
                  ? "Jeg bygger nettsider raskt og effektivt ved å bruke de nyeste webteknologiene. Enten du ønsker en enkel løsning med et brukervennlig system, eller en skreddersydd nettside etter dine behov, kan du stole på min ekspertise."
                  : "I build websites quickly and efficiently using the latest web technologies. Whether you want a simple solution with a user-friendly system, or a custom website tailored to your needs, you can rely on my expertise."}
              </ThemedH5>
              <div className="grid justify-start grid-flow-col gap-8">
                <div className="h-[60px] flex justify-start items-center">
                  <Link href="/contact">
                    <ArrowCTA>
                      {params.lang === "no" ? "Kontakt nå" : "Contact now"}
                    </ArrowCTA>
                  </Link>
                </div>
                <div className="h-[60px] flex justify-start items-center max-w-fit">
                  <ScrollToSectionButton>
                    {params.lang === "no" ? "tjenester" : "Services"}
                  </ScrollToSectionButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <THREESpace /> */}
      </div>
    </>
  );
};
