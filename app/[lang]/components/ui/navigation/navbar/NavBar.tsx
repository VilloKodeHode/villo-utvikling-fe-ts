import { getDictionary } from "get-dictionary";
import { Locale } from "i18next.config";
import NavItem from "../molecules/NavItem";
import LogoComponent from "@components/atoms/Logo";

interface ComponentProps {
  className?: string;
  params: {
    lang: Locale; // Dynamically passed language from URL
  };
}

interface MenuItem {
  text: string;
  href: string;
}

export const NavBar = async ({ params }: ComponentProps) => {
  const dictionary = await getDictionary(params.lang);
  const menuItems = dictionary.menu_items.map((item: MenuItem) => {
    const hrefWithLang = item.href.replace("{lang}", params.lang);
    return { ...item, href: hrefWithLang };
  });

  return (
    <div
      className={`flex w-full px-2 sm:px-4 lg:px-8 justify-between items-center relative dark:backdrop-blur-3xl`}
    >
      <div className="absolute w-0 left-0 bottom-0 h-0.5 duration-1000 transition-[width] dark:w-full bg-dark-black85" />
      <div className="absolute w-full right-0 bottom-0 h-0.5 duration-1000 transition-[width] dark:w-0 bg-light-white10" />
      <LogoComponent onclick={null} image={dictionary.logo} />

      <div className="hidden ml-8 md:block">
        {/* TODO: Check what rounded-bl-full does */}
        <div className="flex-row hidden justify-end h-[112px] items-center rounded-bl-full gap-8 w-full md:flex">
          {menuItems.map((item, index) => (
            <NavItem
              textSize="text-p"
              key={item.text + "navitem" + index}
              text={item.text}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
