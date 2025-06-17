import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18next.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
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
  const url = request.nextUrl;
  const hostname = url.hostname;
  const isLocalhost =
    hostname === "localhost" || hostname.startsWith("127.0.0.1");

  // Skip public files
  if (
    ["/manifest.json", "robots.txt", "/favicon.ico"].includes(pathname) ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/models/") ||
    pathname.startsWith("/videos/")
  ) {
    return;
  }

  // --- PRODUCTION: Use domain only, no /no or /en in path ---
  if (!isLocalhost) {
    // If on .no, always serve Norwegian
    if (hostname === "villoutvikling.no") {
      // Redirect /no/* to clean path
      if (pathname.startsWith("/no/")) {
        return NextResponse.redirect(
          `https://villoutvikling.no${
            pathname.replace(/^\/no/, "") || "/"
          }`
        );
      }
      // Allow all other paths
      return NextResponse.next();
    }
    // If on .com, always serve English
    if (hostname === "villoutvikling.com") {
      // Redirect /en/* to clean path
      if (pathname.startsWith("/en/")) {
        return NextResponse.redirect(
          `https://villoutvikling.com${
            pathname.replace(/^\/en/, "") || "/"
          }`
        );
      }
      // Allow all other paths
      return NextResponse.next();
    }
    // If on wrong domain, redirect to correct domain (optional, or just allow)
  }

  // --- LOCAL DEVELOPMENT: Use /no or /en prefix for language ---
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const userAgent = request.headers.get("user-agent") || "";
    const isBot =
      /discordbot|facebookexternalhit|twitterbot|linkedinbot|whatsapp|slackbot|telegrambot/i.test(
        userAgent
      );

    if (pathname === "/" && isBot) {
      return NextResponse.next();
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
