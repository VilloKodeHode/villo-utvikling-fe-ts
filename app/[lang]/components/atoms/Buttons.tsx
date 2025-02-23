"use client";

import { FiArrowRight, FiExternalLink, FiSend } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { ButtonProps } from "app/[lang]/interfaces/PageProps";

//TODO: Make a button component that has the basic styling and use it on the components below.

export const BaseButton = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline-2 group hover:outline-hidden py-4 font-bold uppercase shadow-lg transition duration-200 ease-linear ${className} text-light-ash bg-light-snow outline-light-ash hover:shadow-light-cloud hover:text-light-snow  hover:bg-light-violet/95 dark:text-dark-frost dark:bg-light-obsidian  dark:outline-dark-frost dark:hover:shadow-dark-slate dark:hover:bg-dark-lavender/95 rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
};

export default function CallToActionButton({
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline-2 group hover:outline-hidden py-4 font-bold uppercase shadow-lg transition duration-200 ease-linear ${className} text-light-ash  bg-light-snow outline-light-ash hover:shadow-light-cloud hover:text-light-snow  hover:bg-light-violet/95
          dark:text-dark-frost dark:bg-light-obsidian dark:outline-dark-frost dark:hover:shadow-dark-slate hover:dark:bg-dark-lavender/95 rounded-full 
          shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}

export function ReadMoreButton({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative cursor-pointer flex w-fit h-fit justify-center items-center group font-bold uppercase transition duration-200 ease-linear ${className} text-light-ash hover:text-light-violet dark:text-dark-frost dark:hover:text-dark-lavender
       rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <div
          className={`absolute w-full h-[1px] py-[1px] bottom-0
bg-light-ash group-hover:bg-light-violet
dark:bg-dark-frost dark:group-hover:bg-dark-lavender
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
      className={`px-4 outline-[1px] group hover:outline-hidden py-1 font-bold uppercase shadow-lg transition duration-200 ease-linear ${className} 
          text-light-ash bg-light-snow outline-light-ash hover:shadow-light-cloud hover:text-light-snow  hover:bg-light-violet/95 dark:text-dark-frost dark:bg-light-obsidian dark:outline-dark-frost dark:hover:shadow-dark-slate dark:hover:bg-dark-lavender/95 rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}

export function ArrowCTA({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative cursor-pointer px-6 pr-12 outline-2 flex justify-center items-center group hover:outline-hidden py-4 font-bold uppercase transition 
        duration-200 ease-linear ${className} text-light-ash bg-light-snow outline-light-ash hover:text-light-snow hover:bg-light-violet
      dark:text-dark-frost dark:bg-light-obsidian dark:outline-dark-frost dark:hover:bg-dark-lavender rounded-full shadow-md xl:w-fit active:scale-95 
      text-p leading-p hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <FiArrowRight
          className={`
              text-light-ash group-hover:text-light-snow
              dark:text-dark-frost
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
      className={`relative px-6 pr-12 outline-2 flex justify-center items-center group hover:outline-hidden py-4 my-4 
        font-bold uppercase transition duration-200 ease-linear ${className} text-light-ash bg-light-snow 
        outline-light-ash hover:text-light-snow hover:bg-light-violet dark:text-dark-frost dark:bg-light-obsidian 
        dark:outline-dark-frost dark:hover:bg-dark-lavender rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p 
        hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <FiExternalLink
          className={`
              text-light-ash group-hover:text-light-snow dark:text-dark-frost absolute inline-block w-5 h-5 m-auto ml-1 
              transition-all duration-200 right-4 opacity-90 group-hover:ml-2 group-hover:w-7 group-hover:h-7`}
        />
      </>
    </button>
  );
}

export const CTAButton = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-6 outline-2 flex justify-center items-center group hover:outline-hidden py-4 font-bold uppercase transition 
        duration-200 ease-linear ${className} text-light-ash bg-light-snow outline-light-ash hover:text-light-snow hover:bg-light-violet
          dark:text-dark-frost dark:bg-light-obsidian dark:outline-dark-frost   dark:hover:bg-dark-lavender rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
};

export function SendCTA({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline-2 flex justify-center items-center group hover:outline-hidden py-4 my-4 font-bold uppercase transition duration-100 ease-linear ${className} 
          text-light-ash bg-light-snow outline-light-ash hover:text-light-snow hover:bg-light-violet
          dark:text-dark-frost dark:bg-light-obsidian dark:outline-dark-frost dark:hover:bg-dark-lavender"
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
      className={`px-6 outline-2 flex justify-center items-center group hover:outline-hidden py-4 my-4 font-bold uppercase transition duration-100 ease-linear ${className} 
          text-light-ash bg-light-snow outline-light-ash hover:text-light-snow hover:bg-light-violet
          dark:text-dark-frost dark:bg-light-obsidian dark:outline-dark-frost dark:hover:bg-dark-lavender"
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
      className={`px-6 outline-2 flex justify-center shadow items-center group hover:outline-hidden py-4 my-4 font-bold uppercase transition duration-100 ease-linear ${className} text-light-ash bg-light-snow hover:shadow-light-obsidian outline-light-ash hover:text-light-snow hover:bg-light-violet
          dark:text-dark-frost dark:bg-light-obsidian dark:outline-dark-frost dark:hover:shadow-dark-midnight hover:bg-dark-lavender"
      rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>
        {children}
        <MdOutlineWorkOutline className="inline-block w-5 h-5 m-auto ml-2 transition-all duration-200 group-hover:-translate-y-1/2 group-hover:animate-cookie-shake opacity-90 group-hover:opacity-100 group-hover:ml-2 group-hover:w-5 group-hover:h-5" />
      </>
    </button>
  );
}

export function CookieAccept({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 cursor-pointer outline-2 group hover:outline-hidden py-2 font-bold uppercase transition duration-200 ease-linear ${className}
          text-light-ash bg-light-snow outline-light-ash hover:text-light-snow  hover:bg-light-violet
          dark:text-dark-frost dark:bg-light-obsidian dark:outline-dark-frost dark:hover:bg-dark-lavender"
      rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}
