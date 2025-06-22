import { useTranslations } from "next-intl";
import { ThemedH2, ThemedH5, ThemedP } from "@components/atoms/ThemedText";
import Image from "next/image";

export const TestemonialsSection = () => {
  const t = useTranslations("portfolio.testimonials");
  const testimonials = t.raw("testimonials"); // expects an array in your messages file
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <ThemedH2 className="px-12 text-center">
          {t("sectionTitle")}
        </ThemedH2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] overflow-hidden 2xl:grid-rows-1 grid-rows-[270px_1fr] gap-4 rounded-xl glass-morphism-card">
            <div className="relative">
              <Image
                className="object-cover w-full h-full"
                src={testimonial.src}
                alt={testimonial.person}
                layout="fill"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-between p-3">
              <Image
                className="absolute h-full w-full -z-10 transform -translate-x-1/2 -translate-y-1/2 opacity-5 dark:opacity-30 top-1/2 left-1/2"
                src={testimonial.logoSrc}
                alt="company logo"
                width={300}
                height={300}
              />
              <div className="flex flex-col justify-between h-full">
                <ThemedP className="z-20 max-w-xs italic">
                  {testimonial.testimonial}
                </ThemedP>
                <div>
                  <ThemedH5 className="z-20 max-w-xs font-normal">
                    - {testimonial.person}
                  </ThemedH5>
                  <ThemedH5 className="z-20 max-w-xs pl-4 font-thin">
                    {t("personTitle")}
                  </ThemedH5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
