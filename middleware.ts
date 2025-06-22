import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nextIntlConfig from "./next-intl.config.mjs";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const { locales, defaultLocale } = nextIntlConfig;

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );
  const locale = matchLocale(languages, locales, defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip public files
  if (
    ["/manifest.json", "robots.txt", "/favicon.ico"].includes(pathname) ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/models/") ||
    pathname.startsWith("/videos/")
  ) {
    return;
  }

  // Check for language in the URL
  const url = request.nextUrl;
  const hostname = url.hostname;

  const isLocalhost =
    hostname === "localhost" || hostname.startsWith("127.0.0.1");

  if (!isLocalhost) {
    if (hostname === "villoutvikling.no" && pathname.startsWith("/no")) {
      return NextResponse.next(); // Already on the correct domain and locale
    } else if (
      hostname === "villoutvikling.com" &&
      pathname.startsWith("/en")
    ) {
      return NextResponse.next(); // Already on the correct domain and locale
    }

    if (pathname.startsWith("/no")) {
      // Redirect to Norwegian domain
      return NextResponse.redirect(`https://villoutvikling.no${pathname}`);
    } else if (pathname.startsWith("/en")) {
      // Redirect to English domain
      return NextResponse.redirect(`https://villoutvikling.com${pathname}`);
    }
  }

  // Already localized
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const userAgent = request.headers.get("user-agent") || "";
    const isBot =
      /discordbot|facebookexternalhit|twitterbot|linkedinbot|whatsapp|slackbot|telegrambot/i.test(
        userAgent
      );

    if (pathname === "/" && isBot) {
      return NextResponse.next(); // ✅ Allow bots to read the homepage metadata
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
