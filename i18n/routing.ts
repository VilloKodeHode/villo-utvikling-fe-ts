import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // Optional: Hide the default locale prefix (e.g. /om-oss instead of /no/om-oss)
  localePrefix: 'as-needed',
  // A list of all locales that are supported
  locales: ["en", "no"],

  // Used when no locale matches
  defaultLocale: "no",

  // Domain-based routing for production
  domains:
    process.env.NODE_ENV === "production"
      ? [
          {
            domain: "villoutvikling.com",
            defaultLocale: "en",
            locales: ["en"],
          },
          {
            domain: "www.villoutvikling.com",
            defaultLocale: "en",
            locales: ["en"],
          },
          {
            domain: "villoutvikling.no",
            defaultLocale: "no",
            locales: ["no"],
          },
          {
            domain: "www.villoutvikling.no",
            defaultLocale: "no",
            locales: ["no"],
          },
        ]
      : undefined,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

export type Locale = (typeof routing.locales)[number];
