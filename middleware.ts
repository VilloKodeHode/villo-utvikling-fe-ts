import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18next.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const url = request.nextUrl;
  const langParam = url.searchParams.get(
    "lang"
  ) as (typeof i18n.locales)[number];

  if (langParam && i18n.locales.includes(langParam)) {
    return langParam; // Use the `lang` query parameter if valid
  }

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );
  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = url.hostname;

  // Prioritize the `lang` query parameter
  let lang = url.searchParams.get("lang") as "no" | "en";

  if (!lang || !i18n.locales.includes(lang)) {
    // Fallback to domain-based language detection
    if (hostname === "villoutvikling.com") {
      lang = "en";
    } else if (hostname === "villoutvikling.no") {
      lang = "no";
    } else {
      // Fallback to default locale
      lang = i18n.defaultLocale;
    }
  }

  // Append the `lang` parameter to the URL for proper resolution
  url.searchParams.set("lang", lang);

  // Set language as a custom header
  const response = NextResponse.rewrite(url);
  response.headers.set("x-language", lang);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
