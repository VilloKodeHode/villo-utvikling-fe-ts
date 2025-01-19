"use client";

import { i18n, type Locale } from "i18next.config";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  // console.log(i18n.locales)

  return (
    <div>
      <ul className="flex gap-3">
        {i18n.locales.map((locale) => (
          <li key={locale}>
            <Link
              href={redirectedPathname(locale)}
              className={pathname === redirectedPathname(locale) ? "" : ""}
            >
              <Image
                className={`w-fit h-5 hover:scale-125 transition cursor-pointer ${
                  pathname === redirectedPathname(locale)
                    ? "scale-110 opacity-100 outline outline-[1px] outline-Villo-dark-primary dark:outline-Villo-light-primary"
                    : "opacity-60"
                }`}
                src={`/images/flags/${locale}.png`}
                width={450}
                alt={locale}
                height={300}
              />
            </Link>
          </li>
        ))}
      </ul>
      {/* <div className="absolute top-0 left-0 flex items-center justify-center h-screen w-screen bg-Villo-dark-white20 dark:bg-orange-700 z-[999]">
        <Image
          className={`h-36 w-36`}
          src={`${
            pathname === redirectedPathname("en")
              ? "/flags/en.png"
              : "/flags/no.png"
          }`}
          width={450}
          alt={pathname === redirectedPathname("en") ? "en" : "no"}
          height={300}
        />
      </div> */}
    </div>
  );
}
