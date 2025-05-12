"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher({ className }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentLang, setCurrentLang] = useState("no");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const langParam = searchParams.get("lang");
      setCurrentLang(langParam === "en" ? "en" : "no");
    }
  }, [searchParams]);

  const handleLanguageSwitch = (lang) => {
    const params = new URLSearchParams(searchParams);
    params.set("lang", lang);
    router.push(`?${params.toString()}`); // Update the URL without a full reload
  };

  return (
    <div className={className}>
      <ul className="flex gap-3">
        <li>
          <button
            onClick={() => handleLanguageSwitch("no")}
            className={`hover:scale-125 transition cursor-pointer rounded ${currentLang === "no" ? "outline-2 outline-blue-500 bg-blue-100 opacity-100" : "opacity-60"}`}>
            <Image
              className="w-fit h-5"
              src="/images/flags/no.png"
              width={450}
              alt="Norwegian"
              height={300}
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLanguageSwitch("en")}
            className={`hover:scale-125 transition cursor-pointer rounded ${currentLang === "en" ? "outline-2 outline-blue-500 bg-blue-100 opacity-100" : "opacity-60"}`}>
            <Image
              className="w-fit h-5"
              src="/images/flags/en.png"
              width={450}
              alt="English"
              height={300}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
