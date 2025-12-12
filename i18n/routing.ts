import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "no"],

  // Used when no locale matches
  defaultLocale: "no",

  // Optional: Hide the default locale prefix (e.g. /om-oss instead of /no/om-oss)
  // localePrefix: 'as-needed'
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

export type Locale = (typeof routing.locales)[number];
