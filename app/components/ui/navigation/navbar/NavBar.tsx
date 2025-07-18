import NavItem from "../molecules/NavItem";
import LogoComponent from "@components/atoms/Logo";
import { ComponentPropsWithParams } from "app/interfaces/PageProps";
import HamburgerBar from "../hamburgerbar/HamburgerBar";

interface MenuItem {
  text: string;
  href: string;
}

export const NavBar = ({ content, params }: ComponentPropsWithParams) => {
  const { lang } = params;

  const menuItems = content?.map((item: MenuItem) => {
    if (!item.href) {
      console.error("Menu item missing href:", item);
      return { ...item, href: "#" }; // Default to "#" if href is missing
    }

    const hrefWithLang = item.href.replace("{lang}", lang);
    return { ...item, href: hrefWithLang };
  });

  return (
    <>
      <div className="relative">
        <div
          className={`flex z-100 w-full px-4 sm:px-6 lg:px-8 h-[112px] justify-between items-center glass-morphism-ui border-t-[1px] border-light-cloud dark:border-dark-slate overflow-x-hidden `}>
          <div className="absolute w-0 left-0 bottom-0 h-0.5 duration-1000 transition-[width] dark:w-full bg-dark-slate" />
          <div className="absolute w-full right-0 bottom-0 h-0.5 duration-1000 transition-[width] dark:w-0 bg-light-cloud" />
          <LogoComponent
            onclick={null}
            params={params}
          />
          <div className="hidden ml-8 md:block">
            {/* TODO: Check what rounded-bl-full does */}
            <div className="flex-row hidden justify-end h-full items-center rounded-bl-full gap-8 w-full md:flex">
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
        <HamburgerBar
          params={{ lang }}
          menuItems={menuItems}
        />
      </div>
    </>
  );
};
