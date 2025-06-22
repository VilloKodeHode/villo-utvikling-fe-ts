"use client";

import Image from "next/image";
import { useState } from "react";
import { deleteCookie, setCookie } from "cookies-next";
import { ThemedH5, ThemedSmall } from "@components/atoms/ThemedText";
import { CookieButton } from "@components/atoms/Buttons";
import { ComponentProps } from "app/interfaces/PageProps";
import { useTranslations } from "next-intl";

const CookiePopup = () => {
  const t = useTranslations("cookie");
  const [showPopup, setShowPopup] = useState(false);
  const [beenUsed, setbeenUsed] = useState(false);

  const handleCookieAccept = () => {
    // Set a cookie to remember that the user has accepted cookies
    setCookie("acceptedCookies", true, {
      maxAge: 365 * 24 * 60 * 60, // Cookie expiration in seconds (1 year)
    });
  };

  const handleCookieDecline = () => {
    deleteCookie("acceptedCookies");
    deleteCookie("theme");
  };

  const handleAccept = () => {
    setShowPopup(false);
    handleCookieAccept();
  };

  const handleDecline = () => {
    setShowPopup(false);
    handleCookieDecline();
  };

  const handleShowPopup = () => {
    setbeenUsed(true);
    setShowPopup(!showPopup);
  };

  return (
    <div
      className={`${
        showPopup
          ? "animate-cookies-slide-in"
          : beenUsed && !showPopup
          ? "animate-cookies-slide-out"
          : ""
      } fixed bottom-0 -left-[320px] z-50 flex items-center justify-center group h-fit w-fit`}
    >
      <div
        className={`min-h-[131px] max-w-[300px] transition-all duration-300  px-6 py-4 m-2 glass-morphism rounded-lg backdrop-blur-sm`}
      >
        <div className="relative grid items-center justify-center gap-2 pt-3 text-center text-balance">
          <ThemedH5 className="pb-2 font-bold text-lg text-light-obsidian dark:text-dark-ice">
            {t("title")}
          </ThemedH5>
          <ThemedSmall className="text-sm text-light-ash dark:text-dark-frost leading-relaxed">
            {t("why")}
          </ThemedSmall>
          <ThemedSmall className="text-xs text-light-charcoal dark:text-dark-glacier leading-snug mt-1">
            {t("disclaimer")}
          </ThemedSmall>
          <div className="flex justify-around gap-2">
            <CookieButton onClick={handleAccept} className="">
              {t("accept")}
            </CookieButton>
            <CookieButton onClick={handleDecline} className="">
              {t("decline")}
            </CookieButton>
          </div>
        </div>
        <button onClick={handleShowPopup}>
          <Image
            src="/images/cookie_consent/noto_cookie.svg"
            width="50"
            height="50"
            alt="cookie"
            className={`absolute transition-all cursor-pointer duration-500 
        ${
          showPopup
            ? "bottom-[230px] sm:bottom-[242px] left-[280px] sm:left-[290px]"
            : "bottom-[4px] left-[320px] sm:bottom-[18px] sm:left-[334px] hover:scale-125 opacity-30 hover:animate-cookie-shake hover:opacity-100"
        }
        `}
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
