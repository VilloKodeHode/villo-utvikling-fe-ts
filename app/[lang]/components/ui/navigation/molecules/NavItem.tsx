"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

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
  const { theme } = useTheme();
  const pathName = usePathname();
  // const lastParam = () => {
  //   const result = "/" + pathName.split("/")[pathName.split("/").length - 1];
  //   return result.replace(/\/(en|no)$/, "/");
  // };
  const prevParam = () => {
    const result = "/" + pathName.split("/")[pathName.split("/").length - 2];
    return result.replace(/\/(en|no)$/, "/");
  };
  // const ignoreLanguageParam = prevParam === "/no" || prevParam === "en";
  // console.log("prevParam:", prevParam());
  // console.log("lastParam:", lastParam());
  // console.log("pathName:", pathName);
  // console.log("href", href);
  // console.log(href.startsWith(prevParam))

  // const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // useEffect(() => {
  //   setIsThemeLoaded(true);
  // }, [theme]);

  // if (!isThemeLoaded) return null;
  return (
    <div key={text} className={`relative group ${className}`}>
      <Link href={href} className="">
        <p
          className={`${textSize} text-Villo-light-black dark:text-Villo-dark-white z-10`}
          onClick={onClick}
        >
          {text}
        </p>
        <div
          className={` ${
            pathName === href ||
            (href.includes("/services") && prevParam() === "/services")
              ? "h-2"
              : "group-hover:h-2"
          } absolute -z-[10] w-full h-0 transition-[height] bg-Villo-light-primary  dark:bg-Villo-dark-primary`}
        />
      </Link>
      {(pathName === href ||
        (href.includes("/services") && prevParam() === "/services")) && (
        <div className="absolute top-0 w-5 h-full -left-[20px]">
          <Image
            src={
              theme === "light"
                ? "/images/logo/WindLogoNoTextLightMode.svg"
                : "/images/logo/WindLogoNoTextDarkMode.svg"
            }
            className="w-auto h-full animate-Appear"
            fill={true}
            alt=""
          />
        </div>
      )}
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
//               ? "text-Villo-light-black"
//               : "text-Villo-dark-white"
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
//                 ? "bg-Villo-light-primary"
//                 : "bg-Villo-dark-primary"
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
//             className="w-auto h-full animate-Appear"
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
//               ? "text-Villo-light-black"
//               : "text-Villo-dark-white"
//           }

//             `}
//           onClick={onClick}
//         >
//           {text}
//         </p>
//         {/* <div
//           className={`${currentPath === href ? `border opacity-100` : "group-hover:border group-hover:opacity-100"
//             } absolute w-[110%] bottom-1/2 translate-y-1/2 translate-x-1/2  -z-10 h-[110%] opacity-0 transition-all ${Theme === "light"
//               ? " border-Villo-light-primary"
//               : "border-Villo-dark-primary"
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
//             className="w-auto h-full animate-Appear"
//             fill="responsive"
//             alt=""
//           />
//         </div>
//       )}
//     </div>
//   );
// };

export default NavItem;
