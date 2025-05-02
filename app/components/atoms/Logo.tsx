import Link from "next/link";
import { LogoIconLeft, LogoIconRight, LogoText } from "./logo/LogoParts";

const LogoComponent = async ({ onclick, params }) => {
  const { lang } = await params;
  // Find the logo object based on the theme

  return (
    <Link
      aria-label={lang === "no" ? "Gå til forsiden" : "Go to homepage"}
      onClick={onclick}
      href={"/" + lang}
      className="relative hover:scale-105 duration-1000 group mt-4">
      <LogoText />
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
