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

  // 1. If on correct domain and locale, allow
  if (!isLocalhost) {
    if (hostname === "villoutvikling.no" && pathname.startsWith("/no")) {
      return NextResponse.next();
    }
    if (hostname === "villoutvikling.com" && pathname.startsWith("/en")) {
      return NextResponse.next();
    }
    // 2. If on wrong domain for locale, redirect to correct domain
    if (pathname.startsWith("/no") && hostname !== "villoutvikling.no") {
      return NextResponse.redirect(`https://villoutvikling.no${pathname}`);
    }
    if (pathname.startsWith("/en") && hostname !== "villoutvikling.com") {
      return NextResponse.redirect(`https://villoutvikling.com${pathname}`);
    }
  }

  // 3. If missing locale in path, add it
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
