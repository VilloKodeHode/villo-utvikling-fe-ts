"use client";

import { ButtonProps } from "app/interfaces/PageProps";
import {
  ArrowRightIcon,
  EmailIcon,
  ExternalLinkIcon,
  SendIcon,
  WorkIcon,
} from "./SvgIcons";

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
      className={`button-style-alternative glass-morphism ${className}`}
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

export function SkillLinkButton({
  children,
  borderColor,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`button-style-alternative glass-morphism ${borderColor} ${className}`}
    >
      <>{children}</>
    </button>
  );
}

export function BadgeButton({
  children,
  onClick,
  className,
  borderColor,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`button-style-alternative px-2 py-1 text-sm font-medium rounded glass-morphism text-light-obsidian dark:text-dark-ice ${borderColor} ${className}`}
    >
      <>{children}</>
    </button>
  );
}

export function ArrowCTA({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative pr-12 group xl:w-fit origin-center glass-morphism-button button-style ${className}`}
    >
      <>
        {children}
        <ArrowRightIcon />
      </>
    </button>
  );
}

export function ExternalCTA({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative pr-12 group xl:w-fit origin-center glass-morphism-button button-style ${className} origin-center`}
    >
      <>
        {children}
        <ExternalLinkIcon />
      </>
    </button>
  );
}

export const CTAButton = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group xl:w-fit ${className} glass-morphism-button-inverse button-style`}
    >
      <>{children}</>
    </button>
  );
};
export function SendCTA({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button-style-alternative glass-morphism group gap-1 py-3 ${className}`}
    >
      <>
        {children}
        <SendIcon />
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
        <EmailIcon />
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
        <WorkIcon />
      </>
    </button>
  );
}

export function CookieButton({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`glass-morphism-button button-style ${className}`}
    >
      <>{children}</>
    </button>
  );
}
