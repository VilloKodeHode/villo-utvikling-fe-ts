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

// export const DropDown = ({
//   //TODO: make a context for the props instead (headerContext?)
//   children,
//   onClick,
//   className,
//   textSize,
//   href = "/",
// }) => {
//   const { theme, currentPath } = useContext(UserContext);

//   const isServiceSubPage =
//     currentPath === "/services_provided/website" ||
//     currentPath === "/services_provided/webcontent" ||
//     currentPath === "/services_provided/SEO";
//   return (
//     <div className={`relative group z-10 ${className}`}>
//       <Link href={href} className="">
//         <button
//           className={`${textSize} active:after:rotate-180 ${
//             theme === "light"
//               ? "text-light-obsidian"
//               : "text-dark-ice"
//           }  z-10`}
//           onClick={onClick}
//         >
//           {children}
//         </button>
//       </Link>
//       <div
//         className={`
//             ${isServiceSubPage ? `h-2` : "group-hover:h-2"}
//             absolute w-full h-0 transition-all ${
//               theme === "light"
//                 ? "bg-light-violet"
//                 : "bg-dark-lavender"
//             }`}
//       />

//       {isServiceSubPage && (
//         <div className="absolute top-0 w-3 h-full -left-4">
//           <Image
//             src={
//               theme === "light"
//                 ? "/logo/WindLogoNoTextLightMode.svg"
//                 : "/logo/WindLogoNoTextDarkMode.svg"
//             }
//             className="w-auto h-full animate-appear"
//             fill="responsive"
//             alt=""
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export const DropDownItem = ({
//   //TODO: make a context for the props instead (headerContext?)
//   text,
//   href,
//   onClick,
//   className,
//   textSize,
// }) => {
//   const { theme, currentPath } = useContext(UserContext);
//   return (
//     <div key={text} className={`relative group z-10 ${className}`}>
//       <Link href={href} className="">
//         <p
//           className={`z-10 hover:animate-pulse ${textSize} ${
//             theme === "light"
//               ? "text-light-obsidian"
//               : "text-dark-ice"
//           }

//             `}
//           onClick={onClick}
//         >
//           {text}
//         </p>
//         {/* <div
//           className={`${currentPath === href ? `border opacity-100` : "group-hover:border group-hover:opacity-100"
//             } absolute w-[110%] bottom-1/2 translate-y-1/2 translate-x-1/2  -z-10 h-[110%] opacity-0 transition-all ${Theme === "light"
//               ? " border-light-violet"
//               : "border-dark-lavender"
//             }`}
//         /> */}
//       </Link>
//       {currentPath === href && (
//         <div className="absolute top-0 w-3 h-full -left-4">
//           <Image
//             src={
//               theme === "light"
//                 ? "/logo/WindLogoNoTextLightMode.svg"
//                 : "/logo/WindLogoNoTextDarkMode.svg"
//             }
//             className="w-auto h-full animate-appear"
//             fill="responsive"
//             alt=""
//           />
//         </div>
//       )}
//     </div>
//   );
// };

export default NavItem;
