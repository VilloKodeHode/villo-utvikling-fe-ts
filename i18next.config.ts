export const i18n = {
  defaultLocale: "no",
  locales: ["en", "no"],
  domainMapping: {
    "villoutvikling.no": "no",
    "villoutvikling.com": "en",
  },
} as const;

export type Locale = (typeof i18n)["locales"][number];
