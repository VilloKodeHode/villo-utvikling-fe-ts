"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { LogoIconLeft, LogoIconRight, LogoText } from "./logo/LogoParts";

const LogoComponent = ({ onclick, image, params }) => {
  const { theme } = useTheme();

  // Find the logo object based on the theme
  const logoObject = theme ? image[theme] : null;

  return (
    <Link
      onClick={onclick}
      key={logoObject.text}
      href={"/"+params.lang}
      className="relative hover:scale-105 duration-1000 group mt-4"
    >
      <LogoText/>
      <LogoIconLeft className="h-20 -right-1 -top-5" />
      <LogoIconRight className="h-20 -right-7.5 -top-5" />
    </Link>
  );
};

export const SimpleLogoComponent = () => {

  return (
    <>
    <div className="relative group h-20 w-20">
    <LogoIconLeft className="h-20 right-3" />
    <LogoIconRight className="h-20 left-3" />
    </div>
    </>
  );
};

export default LogoComponent;
