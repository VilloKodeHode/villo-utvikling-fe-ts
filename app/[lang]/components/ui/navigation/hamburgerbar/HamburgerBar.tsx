"use client";

import NavItem from "../molecules/NavItem";
import LogoComponent from "@components/atoms/Logo";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function HamburgerBar({
  menuItems,
  params,
}: {
  menuItems: { text: string; href: string }[];
  params: { lang: string };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { theme } = useTheme();

  const handleMenuToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //TODO fix logoComponent error
  return (
    <div className="z-100 flex absolute pr-2 sm:pr-4 lg:pr-8 top-0 right-0 items-center h-full rounded-bl-full md:hidden">
      <button
        className={`block ml-8 duration-200 cursor-pointer hover:scale-110 ${
          theme === "light"
            ? "text-light-violet"
            : "text-dark-lavender"
        }`}
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu className="h-10 w-10" />
      </button>

      <div
        ref={menuRef}
        className={`fixed top-0 z-100 right-0 w-screen h-screen transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="relative z-100 flex justify-center h-screen bg-light-cloud/98 dark:bg-dark-onyx/98">
          <div
            className={`flex items-center justify-center w-full h-2/3 `}
          >
            <ul className="mt-0 p-2">
              <div className="flex flex-col items-center justify-center w-full gap-8 pt-4">
                <button
                  className="absolute cursor-pointer top-3 right-3 w-14 h-14 flex items-center justify-center transition rounded-md"
                  onClick={handleMenuToggle}
                  aria-label="Close menu"
                >
                  <IoCloseSharp
                    className={`text-light-violet dark:text-dark-lavender hover:opacity-70 transition duration-500 w-full h-full`}
                  />
                </button>

                {/* <LogoComponent params={params} onclick={handleMenuToggle} /> */}

                {menuItems.map((menu) => (
                  <NavItem
                    onClick={() => setIsOpen(false)}
                    textSize="text-h4"
                    key={menu.text}
                    text={menu.text}
                    href={menu.href}
                  />
                ))}
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
