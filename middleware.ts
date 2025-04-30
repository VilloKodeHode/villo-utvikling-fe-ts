import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18next.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Transform headers for Negotiator
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
  const pathname = request.nextUrl.pathname;

  // Allow public assets through (manual exclusions for files in /public)
  if (
    ["/manifest.json", "/favicon.ico"].includes(pathname) ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/models/") ||
    pathname.startsWith("/videos/")
  ) {
    return;
  }

  // Skip redirect if pathname already includes a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // ✅ Let '/' render without redirecting (so Discord & bots can preview metadata)
  if (pathnameIsMissingLocale) {
    if (pathname === "/") {
      return NextResponse.next(); // Allow root page to render directly
    }

    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
