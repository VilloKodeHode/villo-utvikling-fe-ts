import Image from "next/image";
import { ThemedP } from "@components/atoms/ThemedText";
import { ComponentProps } from "app/interfaces/PageProps";
import {
  ContactLogoLink,
  FacebookLogoLink,
  GithubLogoLink,
  LinkedInLogoLink,
} from "@components/atoms/LogoLink";

export default async function Footer({ content }: ComponentProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`z-1 relative py-24 sm:px-6 lg:px-12 px-4
       bg-light-mist dark:bg-dark-onyx`}>
      <div className="absolute w-0 left-0 top-0 h-0.5 duration-1000 transition-[width] dark:w-full bg-dark-slate" />
      <div className="absolute w-full right-0 top-0 h-0.5 duration-1000 transition-[width] dark:w-0 bg-light-cloud" />
      <div className="flex flex-col items-center justify-center w-full gap-4 sm:justify-between sm:flex-row">
        <div
          className={`flex flex-col gap-2
            text-light-snow dark:text-dark-ice
          `}>
          <div className="flex gap-4">
            <ContactLogoLink />
            <LinkedInLogoLink />
            <GithubLogoLink />
            <FacebookLogoLink />
          </div>
          <ThemedP>Email: Villokodehode@gmail.com</ThemedP>
          <ThemedP>Phone: +47 932 850 44</ThemedP>
          <ThemedP>Address: Pikåsveien 1D, 3160 Stokke</ThemedP>
        </div>
        {/* Copyright Information */}
        <div
          className={`flex items-center text-center
            text-light-ash dark:text-white
          `}>
          <h4 className="text-h4">{`© ${year} ${content?.companyName}`}</h4>
        </div>

        {/* Privacy Policy and Terms of Service 
        {/* <div className={`text-rt${text-light-snow" : "textdark:-dark-ice"}`}
            <Link href="/privacy-polic">
              <p className="">Privacy Policy</p>
            </Link>
            <Link href="/terms-of-service">
              <p>Terms of Service</p>
            </Link>
          </div> */}
      </div>
    </footer>
  );
}

// export const FooterLinks = () => {

//   return (
//     <div className="flex flex-row">
//       <div className="flex flex-row items-center justify-center m-4">
//         <Link href="/contact">
//           <FiMail
//             className={`w-8 h-8 mr-4  ${
//               theme === "light"
//                 ? "text-light-mist hover:text-light-lavender"
//                 : "text-dark-frost hover:text-dark-deep-violet"
//             } duration-200  hover:scale-125`}
//           />
//         </Link>
//       </div>
//       <div className="flex flex-row items-center justify-center m-4">
//         <a href="https://github.com/VilloKodeHode" target="_blank">
//           <VscGithubAlt
//             className={`w-8 h-8 mr-4  ${
//               theme === "light"
//                 ? "text-light-mist hover:text-light-lavender"
//                 : "text-dark-frost hover:text-dark-deep-violet"
//             } duration-200  hover:scale-125`}
//           />
//         </a>
//       </div>
//       <div className="flex flex-row items-center justify-center m-4">
//         <a
//           href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
//           target="_blank"
//         >
//           <SlSocialLinkedin
//             className={`w-8 h-8 mr-4  ${
//               theme === "light"
//                 ? "text-light-mist hover:text-light-lavender"
//                 : "text-dark-frost hover:text-dark-deep-violet"
//             } duration-200  hover:scale-125`}
//           />
//         </a>
//       </div>
//     </div>
//   );
// };
