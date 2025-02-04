

import { type Locale } from "i18next.config";


 export const redirectedPathname = (pathname: string ,locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };