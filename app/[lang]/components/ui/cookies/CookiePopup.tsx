"use client";

import Image from "next/image";
import { useState } from "react";
import { deleteCookie, setCookie } from "cookies-next";
import { ThemedH5, ThemedSmall } from "@components/atoms/ThemedText";
import { CookieAccept } from "@components/atoms/Buttons";
import { ComponentProps } from "@interfaces/PageProps";

const CookiePopup = ({ content }: ComponentProps) => {
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
          ? "animate-Cookies-slide-in"
          : beenUsed && !showPopup
          ? "animate-Cookies-slide-out"
          : ""
      } fixed bottom-0 -left-[320px] z-50 flex items-center justify-center group h-fit w-fit`}
    >
      <div
        className={`min-h-[131px] max-w-[300px] transition-all duration-300 bg-opacity-[0.95] px-6 py-4 outline m-2 rounded-xl
       
       bg-light-mist group-hover:bg-light-cloud outline-light-ash
          dark:bg-dark-slate dark:group-hover:bg-dark-onyx dark:outline-dark-frost
        `}
      >
        <div className="relative grid items-center justify-center gap-2 pt-3">
          <ThemedH5 className={`pb-2`}>{content?.title}</ThemedH5>
          <ThemedSmall>{content?.why}</ThemedSmall>
          <ThemedSmall
            className={` py-2
          `}
          >
            {content?.disclaimer}
          </ThemedSmall>
          <div className="flex justify-around gap-2">
            <CookieAccept onClick={handleAccept} className="">
              {content?.accept}
            </CookieAccept>
            <CookieAccept onClick={handleDecline} className="">
              {content?.decline}
            </CookieAccept>
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
            : "bottom-[4px] left-[320px] sm:bottom-[18px] sm:left-[334px] hover:scale-125 opacity-30 hover:animate-cookie-shake  hover:opacity-100"
        }
        `}
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
