"use client";

import { Locale } from "i18next.config";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const SplashScreen = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div
      className={`fixed animate-splash-screen-out top-0 left-0 flex flex-col items-center justify-center gap-8 h-screen w-screen bg-dark-white20 dark:bg-light-black z-999`}
    >
      <Image
        className="h-36 w-auto"
        src={`/images/logo/WindLogo${
          theme === "light" ? "Light" : "Dark"
        }Mode.svg`}
        width={450}
        height={300}
        alt="Villo-utvikling-logo"
      />
      <div className="flex gap-8">
        <Image
          className={`h-28 w-auto z-10`}
          src={`${
            pathname === redirectedPathname("en")
              ? "/images/flags/en.png"
              : "/images/flags/no.png"
          }`}
          width={450}
          alt={pathname === redirectedPathname("en") ? "en" : "no"}
          height={300}
        />
        <Image
          className={`h-28 w-auto z-10`}
          src={`/images/themes/${
            theme === "light"
              ? "light"
              : "dark"
          }mode.svg`}
          width={450}
          alt={pathname === redirectedPathname("en") ? "en" : "no"}
          height={300}
        />
      </div>

      <p className="text-3xl font-bold text-dark-black dark:text-light-white">
        {pathname === redirectedPathname("en")
          ? "Loading..."
          : "Laster..."}
      </p>
    </div>
  );
};
