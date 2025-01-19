import { getDictionary } from "get-dictionary";
import { Locale } from "i18next.config";
import NavItem from "../molecules/NavItem";

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

export const NavBar = async ({ className, params }: ComponentProps) => {
  const dictionary = await getDictionary(params.lang);
  const menuItems = dictionary.menu_items.map((item: MenuItem) => {
    const hrefWithLang = item.href.replace("{lang}", params.lang);
    return { ...item, href: hrefWithLang };
  });

  return (
    <div className={`flex w-full items-center justify-start ${className}`}>
      <div className="hidden ml-8 md:block">
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
