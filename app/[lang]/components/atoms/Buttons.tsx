"use client"

import {
  FiArrowRight,
  FiExternalLink,
  FiSend,
} from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { ButtonProps } from "app/[lang]/interfaces/PageProps";

//TODO: Make a button component that has the basic styling and use it on the components below.

export const BaseButton = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 group hover:outline-none py-4 font-bold uppercase shadow-lg transition duration-200 ease-linear ${className} text-Villo-light-black85 hover:bg-opacity-[0.95] bg-Villo-light-white outline-Villo-light-black85 hover:shadow-Villo-light-white15 hover:text-Villo-light-white  hover:bg-Villo-light-primary dark:text-Villo-dark-white10 dark:bg-Villo-light-black dark:hover:bg-opacity-[0.95] dark:outline-Villo-dark-white10 dark:hover:shadow-Villo-dark-black75 dark:hover:bg-Villo-dark-primary rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
};

export default function CallToActionButton({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 group  hover:outline-none py-4 font-bold uppercase shadow-lg transition duration-200 ease-linear ${className} text-Villo-light-black85 hover:bg-opacity-[0.95] bg-Villo-light-white outline-Villo-light-black85 hover:shadow-Villo-light-white15 hover:text-Villo-light-white  hover:bg-Villo-light-primary
          dark:text-Villo-dark-white10 dark:bg-Villo-light-black dark:hover:bg-opacity-[0.95] dark:outline-Villo-dark-white10 dark:hover:shadow-Villo-dark-black75 hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}

export function ReadMoreButton({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex w-fit justify-center items-center group font-bold uppercase transition duration-200 ease-linear ${className} text-Villo-light-black85 hover:text-Villo-light-primary dark:text-Villo-dark-white10 dark:hover:text-Villo-dark-primary
       rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <div
          className={`absolute w-full h-[1px] py-[1px] bottom-0
bg-Villo-light-black85 group-hover:bg-Villo-light-primary
dark:bg-Villo-dark-white10 dark:group-hover:bg-Villo-dark-primary
          `}
        />
      </>
    </button>
  );
}

export function SkillLinkButton({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 outline outline-[1px] group hover:outline-none py-1 font-bold uppercase shadow-lg transition duration-200 ease-linear ${className} 
          text-Villo-light-black85 hover:bg-opacity-[0.95] bg-Villo-light-white outline-Villo-light-black85 hover:shadow-Villo-light-white15 hover:text-Villo-light-white  hover:bg-Villo-light-primary dark:text-Villo-dark-white10 dark:bg-Villo-light-black dark:hover:bg-opacity-[0.95] dark:outline-Villo-dark-white10 dark:hover:shadow-Villo-dark-black75 dark:hover:bg-Villo-dark-primary rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}

export function ArrowCTA({ children, onClick, className}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 pr-12 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-200 ease-linear ${className}
          text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary
          dark:text-Villo-dark-white10 dark:bg-Villo-light-black dark:outline-Villo-dark-white10 dark:hover:bg-Villo-dark-primary
      rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <FiArrowRight
          className={`
              text-Villo-light-black85 group-hover:text-Villo-light-white
              dark:text-Villo-dark-white10
          group-hover:rotate-[360deg] absolute inline-block w-5 h-5 m-auto ml-1 transition-all duration-200 right-4 opacity-90 group-hover:ml-2 group-hover:w-7 group-hover:h-7`}
        />
      </>
    </button>
  );
}

export function ExternalCTA({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 pr-12 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-200 ease-linear ${className}
          text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary
          dark:text-Villo-dark-white10 dark:bg-Villo-light-black dark:outline-Villo-dark-white10 dark:hover:bg-Villo-dark-primary"
      rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <FiExternalLink
          className={`
              text-Villo-light-black85 oup-hover:text-Villo-light-white
              dark:text-Villo-dark-white10
          absolute inline-block w-5 h-5 m-auto ml-1 transition-all duration-200 right-4 opacity-90 group-hover:ml-2 group-hover:w-7 group-hover:h-7`}
        />
      </>
    </button>
  );
}

export const CTAButton = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-linear ${className} 
          text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary
          dark:text-Villo-dark-white10 dark:bg-Villo-light-black dark:outline-Villo-dark-white10 dark:hover:bg-Villo-dark-primary"
      rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
};

export function SendCTA({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-linear ${className} 
          text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary
          dark:text-Villo-dark-white10 dark:bg-Villo-light-black dark:outline-Villo-dark-white10 dark:hover:bg-Villo-dark-primary"
      rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>
        {children}
        <FiSend className="inline-block w-5 h-5 m-auto ml-1 transition-all duration-200 opacity-90 group-hover:rotate-[405deg] group-hover:opacity-100 group-hover:ml-2 group-hover:w-5 group-hover:h-5 group-hover:animate-pulse" />
      </>
    </button>
  );
}

export function EmailCTA({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-linear ${className} 
          text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary
          dark:text-Villo-dark-white10 dark:bg-Villo-light-black dark:outline-Villo-dark-white10 dark:hover:bg-Villo-dark-primary"
      rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>
        {children}
        <TfiEmail className="inline-block w-5 h-5 m-auto ml-2 transition-all duration-200 group-hover:translate-x-1/2 group-hover:-translate-y-1/4 opacity-90 group-hover:rotate-45 group-hover:opacity-100 group-hover:ml-2 group-hover:w-5 group-hover:h-5 group-hover:animate-pulse" />
      </>
    </button>
  );
}

export function PortfolioCTA({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center shadow items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-linear ${className} text-Villo-light-black85 bg-Villo-light-white hover:shadow-Villo-light-black outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary
          dark:text-Villo-dark-white10 dark:bg-Villo-light-black dark:outline-Villo-dark-white10 dark:hover:shadow-Villo-dark-black hover:bg-Villo-dark-primary"
      rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>
        {children}
        <MdOutlineWorkOutline className="inline-block w-5 h-5 m-auto ml-2 transition-all duration-200 group-hover:-translate-y-1/2 group-hover:animate-cookieShake opacity-90 group-hover:opacity-100 group-hover:ml-2 group-hover:w-5 group-hover:h-5" />
      </>
    </button>
  );
}

export function CookieAccept({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 group hover:outline-none py-2 font-bold uppercase transition duration-200 ease-linear ${className}
          text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white  hover:bg-Villo-light-primary
          dark:text-Villo-dark-white10 dark:bg-Villo-light-black dark:outline-Villo-dark-white10 dark:hover:bg-Villo-dark-primary"
      rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}


