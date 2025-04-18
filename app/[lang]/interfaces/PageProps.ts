import { Locale } from "i18next.config";

export interface DictionaryContent {
  [key: string]: any;
}

export interface PageProps {
  params: Promise<{
    lang: Locale;
    service?: string;
  }>;
}

export interface DynamicPageProps {
  params: Promise<{
    lang: Locale;
    service: string;
  }>;
}


export interface ComponentProps {
  className?: string;
  content?: DictionaryContent;
  id?: string;
  showOnScroll?: boolean;
}

export interface ComponentPropsWithParams {
  className?: string;
  params: {
    lang: Locale;
  };
  content?: DictionaryContent;
  id?: string;
  showOnScroll?: boolean;
}


export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  borderColor?: string;
  type?: 'submit' | 'button' | 'reset';
}

export interface RootProps {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
}

