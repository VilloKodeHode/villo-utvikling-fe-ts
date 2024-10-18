"use client";

import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  text: string;
  href: string;
  onClick?: () => void;
  className?: string;
  textSize?: string;
}

//TODO check if logic in these Components can be improved
const NavItem = ({
  //TODO: make a context for the props instead (headerContext?)
  text,
  href,
  onClick,
  className,
  textSize,
}: NavItemProps) => {
  const pathName = usePathname();
  const lastParam = pathName.substring(pathName.lastIndexOf("/") + 1);
  const firstParam = pathName.substring(0, pathName.lastIndexOf("/"));
  // console.log("firstParam:", firstParam);
  // console.log("lastParam:", lastParam);
  // console.log("pathName:", pathName);
  // console.log("href", href);
  // console.log(href.startsWith(firstParam))

  const theme = getCookie("theme");

  return (
    <div key={text} className={`relative group z-10 ${className}`}>
      <Link href={href} className="">
        <p
          className={`${textSize}text-Villo-light-black dark:text-Villo-dark-white z-10`}
          onClick={onClick}
        >
          {text}
        </p>
        <div
          className={`
         

          absolute w-full h-0 transition-all
          
              bg-Villo-light-primary
              dark:bg-Villo-dark-primary
          `}
        />
      </Link>
      {
  ("/" + lastParam === href || 
    (href.includes("/about") && firstParam === "/about")) && (
          <div className="absolute top-0 w-3 h-full -left-4">
            <Image
              src={
                theme === "light"
                  ? "/logo/WindLogoNoTextLightMode.svg"
                  : "/logo/WindLogoNoTextDarkMode.svg"
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
