"use client";

import Image from "next/image";
import { useState } from "react";
import { deleteCookie, setCookie } from "cookies-next";

const CookiePopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

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
    setShowPopup(!showPopup);
  };

  return (
    <div
      className={`${
        showPopup ? "animate-CookiesSlideIn" : "animate-CookiesSlideOut"
      } fixed bottom-0 -left-[320px] z-50 flex items-center justify-center group h-fit w-fit`}
    >
      <div
        className={`min-h-[131px] max-w-[300px] transition-all duration-300 bg-opacity-[0.95] px-6 py-4 outline m-2 rounded-xl         bg-Villo-light-white10 group-hover:bg-Villo-light-white15 outline-Villo-light-black85 dark:bg-Villo-dark-black75 dark:group-hover:bg-Villo-dark-black85 dark:outline-Villo-dark-white10
        `}
      >
        <div className="relative grid items-center justify-center gap-2 pt-3">
          <p className={`pb-2`}>Cookies</p>
          <p>
            Denne nettsiden bruker cookies for å forbedre brukeropplevelsen din
          </p>
          <p className={` py-2 `}>
            Vi lagrer ikke informasjon som kan identifisere deg som person.
            Cookies blir lagret i 1 år
          </p>
          <div className="flex justify-around gap-2">
            <button onClick={handleAccept} className="">
              Godta
            </button>
            <button onClick={handleDecline} className="">
              Avslå
            </button>
          </div>
        </div>
        <button onClick={handleShowPopup}>
          <Image
            src="/images/cookie_consent/noto_cookie.svg"
            width="50"
            height="50"
            alt="cookie"
            className={`absolute transition-all duration-500 
          ${
            showPopup
              ? "bottom-[230px] sm:bottom-[242px] left-[280px] sm:left-[290px]"
              : "bottom-[4px] left-[320px] sm:bottom-[18px] sm:left-[334px] hover:scale-125 opacity-30 hover:animate-cookieShake hover:opacity-100"
          }
          `}
          />
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
