import { Locale } from "i18next.config";

export interface PageProps {
  params: Promise<{
    lang: Locale;
    service?: string;
  }>;
  content?: Record<string, any>;
  showOnScroll?: boolean;
  id?: string;
}

export interface DynamicPageProps {
  params: Promise<{
    lang: Locale;
    service: string;
  }>;
}

export interface ComponentProps {
  className?: string;
  params: Promise<{
    lang: Locale;
  }>;
  content?: Record<string, any>;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  borderColor?: string;
}
