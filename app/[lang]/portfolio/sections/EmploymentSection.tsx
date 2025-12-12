import { BadgeButton } from "@components/atoms/Buttons";
import {
  ShrinkingThemedP,
  ThemedH2,
  ThemedP,
} from "@components/atoms/ThemedText";
import Image from "next/image";
import Link from "next/link";

export const EmploymentSection = ({ content }) => {
  return (
    <section className="px-4 gap-10 grid max-w-7xl sm:px-6 lg:px-8">
      <ThemedH2 className="px-12 text-center">{content.title} </ThemedH2>
      <div className="flex flex-wrap items-center justify-center py-4 gap-8">
        {content.companies.map((company, index) => (
          <div
            key={company.name + index}
            className={`shadow-md gap-2 lg:gap-4 flex flex-col justify-between overflow-hidden h-94 md:w-125 w-full hover:scale-102
                ${company.colors.shadow}
                 transition-all rounded-lg bg-light-mist dark:bg-dark-onyx`}
          >
            <Link
              target="_blank"
              rel="noreferrer"
              href={company.href}
              className="gap-4 h-36 bg-light-graphite hover:bg-light-charcoal dark:bg-dark-slate dark:hover:bg-dark-storm transition-colors flex items-center md:flex-row flex-col p-2 md:p-6 w-full md:justify-between justify-center"
            >
              <Image
                className="md:h-full h-1/2 w-fit"
                src={company.imageUrl}
                alt={company.name}
                width={800}
                height={600}
              />
              <h5
                className={`${company.colors.text} md:text-2xl text-lg h-fit font-bold`}
              >
                {company.jobTitle}
              </h5>
            </Link>

            <ShrinkingThemedP className="max-w-md px-2 md:px-6">
              {company.jobDone}
            </ShrinkingThemedP>

            <div className="h-fit p-2">
              <ThemedP className="mb-1">Skills used:</ThemedP>
              <div className="flex flex-wrap gap-2">
                {company.skillsUsed.map((skill) => (
                  <a
                    key={skill.name + index}
                    href={skill.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BadgeButton key={skill.name} className="">
                      {skill.name}
                    </BadgeButton>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const NewWorkedWithSection = ({ content }) => {
  return (
    <div className="relative z-10 flex flex-col justify-center py-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 min-h-[30vh]">
      <div
        className={`absolute w-screen h-full translate-x-1/2  -z-10 right-1/2 bg-light-cloud dark:bg-dark-onyx`}
      />
      <div className="z-10 text-center">
        <ThemedH2 className="px-12 text-center">{content.title}</ThemedH2>
      </div>
      <div className="mt-10">
        <div className={`z-10 flex flex-wrap justify-center gap-1`}>
          {content.companies.map((company) => (
            <Link
              key={company.id}
              href={company.href}
              target={company.href ? "_blank" : undefined}
              className={`overflow-hidden w-48 rounded-sm shadow-lg hover:scale-105 transition`}
            >
              <div
                className={`z-20 group grid justify-center transition-all px-2 py-4 bg-light-white15 hover:bg-light-mist bg-light-dusk
                    dark:bg-dark-onyx dark:hover:bg-dark-shadow`}
              >
                <div className="relative w-28 h-28">
                  <p className="absolute z-10 text-center transition-all translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 bottom-1/2 right-1/2">
                    {["current", "nåværende"].includes(company.progress)
                      ? company.progress
                      : ""}
                  </p>
                  <Image
                    className="object-contain w-full h-full filter grayscale"
                    src={company.imageUrl}
                    alt={company.name}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
