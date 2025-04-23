"use client";

//TODO: Check if code works:
import { redirectedPathname } from "app/logic/redirectedPathName";
import { i18n } from "i18next.config";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({className}) {
  const pathname = usePathname();

  //! Revert back to this if code isnt working:
  // const redirectedPathname = (locale: Locale) => {
  //   if (!pathname) return "/";
  //   const segments = pathname.split("/");
  //   segments[1] = locale;
  //   return segments.join("/");
  // };

  // console.log(i18n.locales)

  return (
    <div className={className}>
      <ul className="flex gap-3">
        {i18n.locales.map((locale) => (
          <li key={locale}>
            <Link
              href={redirectedPathname(pathname, locale)}
              className={
                pathname === redirectedPathname(pathname, locale) ? "" : ""
              }
            >
              <Image
                className={`w-fit h-5 hover:scale-125 transition cursor-pointer ${
                  pathname === redirectedPathname(pathname, locale)
                    ? "scale-110 opacity-100 outline-[1px] outline-dark-lavender dark:outline-light-violet"
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
      {/* <div className="absolute top-0 left-0 flex items-center justify-center h-screen w-screen bg-dark-twilight dark:bg-orange-700 z-999">
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
