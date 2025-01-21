import { Locale } from "i18next.config";

export interface PageProps {
  params: {
    lang: Locale;     // Dynamically passed language from URL
  };
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}