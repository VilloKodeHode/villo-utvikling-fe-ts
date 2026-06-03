"use client";

//TODO: Check if code works:
import { redirectedPathname } from "@utils/redirectedPathName";
import { routing } from "@i18n/routing";
import Image from "next/legacy/image";
// Use <a> instead of <Link> for external domain navigation
import { usePathname } from "next/navigation";

import { useLocale } from "next-intl";

export default function LanguageSwitcher({ className }) {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <div className={className}>
      <ul className="flex gap-3">
        {routing.locales.map((locale) => (
          <li key={locale}>
            <a
              href={redirectedPathname(pathname, locale)}
              className={currentLocale === locale ? "" : ""}>
              <Image
                className={`w-fit h-5 hover:scale-125 transition cursor-pointer ${
                  currentLocale === locale
                    ? "scale-110 opacity-100 outline-[1px] outline-dark-lavender dark:outline-light-violet"
                    : "opacity-60"
                }`}
                src={`/images/flags/${locale}.png`}
                width={450}
                alt={locale}
                height={300}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
