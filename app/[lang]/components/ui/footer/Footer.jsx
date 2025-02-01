//Footer component
//TODO Change to tsx script

import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";

import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div
      className={`relative py-24 sm:px-6 lg:px-12 px-4 ${
        theme === "light" ? "bg-light-primary" : "bg-dark-primary"
      }`}
    >
      {/* <FooterLinks Theme={Theme} /> */}
      <div className="flex flex-col items-center justify-center w-full gap-4 sm:justify-between sm:flex-row">
        {/* Contact Information */}
        <div
          className={`flex flex-col gap-2 ${
            theme === "light"
              ? "text-light-white"
              : "text-dark-white"
          }`}
        >
          <div className="flex gap-4">
            <Link className="w-fit" href="/contact">
              <FiMail
                className={`w-8 h-8  ${
                  theme === "light"
                    ? "text-light-white10 hover:text-light-white20"
                    : "text-dark-white10 hover:text-dark-white20"
                } duration-200  hover:scale-125`}
              />
            </Link>

            <a href="https://github.com/VilloKodeHode" target="_blank">
              <VscGithubAlt
                className={`w-8 h-8  ${
                  theme === "light"
                    ? "text-light-white10 hover:text-light-white20"
                    : "text-dark-white10 hover:text-dark-white20"
                } duration-200  hover:scale-125`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
              target="_blank"
            >
              <SlSocialLinkedin
                className={`w-8 h-8  ${
                  theme === "light"
                    ? "text-light-white10 hover:text-light-white20"
                    : "text-dark-white10 hover:text-dark-white20"
                } duration-200  hover:scale-125`}
              />
            </a>
          </div>
          <p>Email: Villokodehode@gmail.com</p>
          <p>Phone: +47 932 850 44</p>
          <p>Address: Brekkelia 62B, 3153 Tolvsrød</p>
        </div>
        {/* Copyright Information */}
        <div
          className={`flex items-center text-center ${
            theme === "light"
              ? "text-light-white"
              : "text-dark-white"
          }`}
        >
          <h4 className="text-h4">
            {language === "Norwegian"
              ? `© ${year} Villo utvikling`
              : `© ${year} Villo development`}
          </h4>
        </div>

        {/* Privacy Policy and Terms of Service */}
        {/* <div className={`text-right ${Theme === "light" ? "text-light-white" : "text-dark-white"}`}>
            <Link href="/privacy-policy">
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
    </div>
  );
}

export const FooterLinks = () => {
  const { theme } = useContext(UserContext);
  return (
    <div className="flex flex-row">
      <div className="flex flex-row items-center justify-center m-4">
        <Link href="/contact">
          <FiMail
            className={`w-8 h-8 mr-4  ${
              theme === "light"
                ? "text-light-white10 hover:text-light-secondary"
                : "text-dark-white10 hover:text-dark-secondary"
            } duration-200  hover:scale-125`}
          />
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center m-4">
        <a href="https://github.com/VilloKodeHode" target="_blank">
          <VscGithubAlt
            className={`w-8 h-8 mr-4  ${
              theme === "light"
                ? "text-light-white10 hover:text-light-secondary"
                : "text-dark-white10 hover:text-dark-secondary"
            } duration-200  hover:scale-125`}
          />
        </a>
      </div>
      <div className="flex flex-row items-center justify-center m-4">
        <a
          href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
          target="_blank"
        >
          <SlSocialLinkedin
            className={`w-8 h-8 mr-4  ${
              theme === "light"
                ? "text-light-white10 hover:text-light-secondary"
                : "text-dark-white10 hover:text-dark-secondary"
            } duration-200  hover:scale-125`}
          />
        </a>
      </div>
    </div>
  );
};
