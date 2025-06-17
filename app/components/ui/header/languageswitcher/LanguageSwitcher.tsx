"use client";

//TODO: Check if code works:
import { redirectedPathname } from "app/logic/redirectedPathName";
import { i18n } from "i18next.config";
import Image from "next/image";
// Use <a> instead of <Link> for external domain navigation
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ className }) {
  const pathname = usePathname();

  return (
    <div className={className}>
      <ul className="flex gap-3">
        {i18n.locales.map((locale) => (
          <li key={locale}>
            <a
              href={redirectedPathname(pathname, locale)}
              className={pathname.startsWith(`/${locale}`) ? "" : ""}>
              <Image
                className={`w-fit h-5 hover:scale-125 transition cursor-pointer ${
                  pathname.startsWith(`/${locale}`)
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
