// Enhanced: Returns full URL with correct domain for each locale
import { type Locale } from "i18next.config";

export const redirectedPathname = (pathname: string, locale: Locale) => {
  if (!pathname) return "/";

  // Remove any /no or /en prefix from the path
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "no" || segments[0] === "en") {
    segments.shift();
  }
  const newPath = `/${segments.join("/")}`;

  // Local development: add /no or /en prefix for testing
  if (
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname.startsWith("127."))
  ) {
    return `/${locale}${newPath}`;
  }
  // For server-side (middleware, SSR), fallback to process.env or default
  if (
    typeof process !== "undefined" &&
    process.env &&
    process.env.NODE_ENV === "development"
  ) {
    return `/${locale}${newPath}`;
  }
  // Production: use clean URLs, switch domain for language
  if (locale === "no") {
    return `https://villoutvikling.no${newPath}`;
  } else {
    return `https://villoutvikling.com${newPath}`;
  }
};
