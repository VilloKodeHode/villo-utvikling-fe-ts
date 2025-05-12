"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  text: string;
  href: string;
  onClick?: () => void;
  className?: string;
  textSize?: string;
}

const NavItem = ({
  text,
  href,
  onClick,
  className,
  textSize,
}: NavItemProps) => {
  const pathName = usePathname();
  const currentLang =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("lang") || "no"
      : "no";

  const hrefWithLang = `${href}${href.includes("?") ? "&" : "?"}lang=${currentLang}`;

  // Extract the previous path segment from `pathName`
  const prevSegment = pathName.split("/").slice(-2, -1)[0];

  return (
    <div
      key={text}
      className={`relative group ${className}`}>
      <Link
        href={hrefWithLang}
        className="">
        <p
          className={`${textSize} text-light-obsidian dark:text-dark-ice z-10`}
          onClick={onClick}>
          {text}
        </p>
        <div
          className={` ${
            pathName === href ||
            (href.includes("/services") && prevSegment === "services")
              ? "h-1.5"
              : "group-hover:h-1.5"
          } absolute w-full h-0 transition-[height] bg-light-violet  dark:bg-dark-lavender`}
        />
      </Link>
      {/* {(pathName === href ||
        (href.includes("/services") && prevParam() === "/services")) && (
        <div className="absolute animate-blur-in-out-heavy top-1/3 w-5 h-full -left-5">
          <LogoIconLeft className="h-4.5 right-[3px]" />
          <LogoIconRight className="h-4.5 left-[3px]" />
        </div>
      )} */}
    </div>
  );
};

export default NavItem;
