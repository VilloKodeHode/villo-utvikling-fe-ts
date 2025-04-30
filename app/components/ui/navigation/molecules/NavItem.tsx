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
  const prevParam = () => {
    const result = "/" + pathName.split("/")[pathName.split("/").length - 2];
    return result.replace(/\/(en|no)$/, "/");
  };

  return (
    <div
      key={text}
      className={`relative group ${className}`}>
      <Link
        href={href}
        className="">
        <p
          className={`${textSize} text-light-obsidian dark:text-dark-ice z-10`}
          onClick={onClick}>
          {text}
        </p>
        <div
          className={` ${
            pathName === href ||
            (href.includes("/services") && prevParam() === "/services")
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
