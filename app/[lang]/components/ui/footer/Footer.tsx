//Footer component
//TODO Change to tsx script

import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import Image from "next/image";
import { getDictionary } from "get-dictionary";
import { ThemedP } from "@components/atoms/ThemedText";

export default async function Footer({ params }) {
  const dictionary = await getDictionary(params.lang);

  const year = new Date().getFullYear();
  return (
    <footer
      className={`relative py-24 sm:px-6 lg:px-12 px-4
       bg-light-fog dark:bg-dark-onyx`}
    >
      {/*HUSK Å IMPLEMENTERE FOOTERLINKS COMPONENTS! <FooterLinks Theme={Theme} /> */}
      <div className="flex flex-col items-center justify-center w-full gap-4 sm:justify-between sm:flex-row">
        {/* Contact Information */}
        <div
          className={`flex flex-col gap-2
            text-light-snow dark:text-dark-ice
          `}
        >
          <div className="flex gap-4">
            <Link className="w-fit" href="/contact">
              <FiMail
                className={`w-8 h-8  text-light-ash hover:text-light-violet
                    dark:text-dark-frost dark:hover:text-dark-twilight
                 duration-200  hover:scale-125`}
              />
            </Link>

            <a href="https://github.com/VilloKodeHode" target="_blank">
              <VscGithubAlt
                className={`w-8 h-8  text-light-ash hover:text-light-violet
                    dark:text-dark-frost dark:hover:text-dark-twilight
                 duration-200  hover:scale-125`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
              target="_blank"
            >
              <SlSocialLinkedin
                className={`w-8 h-8  text-light-ash hover:text-light-violet
                    dark:text-dark-frost dark:hover:text-dark-twilight
                 duration-200  hover:scale-125`}
              />
            </a>
          </div>
          <ThemedP>Email: Villokodehode@gmail.com</ThemedP>
          <ThemedP>Phone: +47 932 850 44</ThemedP>
          <ThemedP>Address: Pikåsveien 1D, 3160 Stokke</ThemedP>
        </div>
        {/* Copyright Information */}
        <div
          className={`flex items-center text-center
            text-light-ash dark:text-white
          `}
        >
          <h4 className="text-h4">
            {`© ${year} ${dictionary.footer.companyName}`}
          </h4>
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
      <Image
        src="/logo/Villo_Utvikling_full-Logo.png"
        width={200}
        height={150}
        alt=""
        className="absolute bottom-0 right-0 opacity-0"
      />
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
