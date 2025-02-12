"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const LogoComponent = ({ onclick, image }) => {
  const { theme } = useTheme();

  // Find the logo object based on the theme
  const logoObject = theme ? image[theme] : null;

  return (
    <Link
      onClick={onclick}
      key={logoObject.text}
      href={logoObject.href}
      className="relative hover:scale-105 duration-1000 group mt-4"
    >
      <Image
        src={logoObject.textImage}
        width={logoObject.imageWidth}
        height={logoObject.imageHeight}
        alt="Villo utvikling logo"
        className="z-20 h-full  lg:p-1 animate-Page-appear-right duration-1000"
      />
      <Image
        src={logoObject.leftLogo}
        width={logoObject.imageWidth}
        height={logoObject.imageHeight}
        alt="Villo utvikling logo"
        className="-z-10 absolute w-fit h-20 -top-5 -right-1 lg:p-1 group-hover:-rotate-360 ease-out origin-center duration-1000"
      />
      <Image
        src={logoObject.rightLogo}
        width={logoObject.imageWidth}
        height={logoObject.imageHeight}
        alt="Villo utvikling logo"
        className="z-20 h-20 w-fit absolute -top-5 -right-7.5 lg:p-1 group-hover:-rotate-360 duration-1000"
      />
    </Link>
  );
};

export const SimpleLogoComponent = () => {
  const { theme } = useTheme();

  // Find the logo object based on the theme
  const logoSrc =
    theme === "light"
      ? "/images/logo/WindLogoNoTextLightMode.svg"
      : "/images/logo/WindLogoNoTextDarkMode.svg";

  if (!logoSrc) {
    // Handle case when logo object for the theme is not found
    return null;
  }

  return (
    <div>
      <Image
        src={logoSrc}
        width={200}
        height={200}
        alt="Villo utvikling logo"
        className="z-50 m-4"
      />
    </div>
  );
};

export default LogoComponent;
