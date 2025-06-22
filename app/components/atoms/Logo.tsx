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
      <LogoText className="scale-70 ml:scale-100" />
      <LogoIconLeft className="h-20 ml:-right-1 right-4 ml:-top-5 -top-4 scale-70 ml:scale-100" />
      <LogoIconRight className="h-20 ml:-right-7.5 -right-1.5 ml:-top-5 -top-4 scale-70 ml:scale-100" />
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
