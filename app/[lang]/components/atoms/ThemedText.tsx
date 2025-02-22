import { SimpleLogoComponent } from "./Logo";


interface ThemedTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ThemedH1 = ({ children, className }: ThemedTextProps) => {
  return (
    <h1
      className={`text-light-obsidian font-bold
       dark:text-dark-ice md:text-h1 text-h2 md:leading-h1 leading-h2 ${className}`}
    >
      {children}
    </h1>
  );
};

export const ThemedH2 = ({ children, className }: ThemedTextProps) => {
  return (
    <h2
      className={`text-light-obsidian
       dark:text-dark-ice sm:text-h2 text-h4 leading-h4 sm:leading-h2  ${className}`}
    >
      {children}
    </h2>
  );
};

export const ThemedH3 = ({ children, className }: ThemedTextProps) => {
  return (
    <h2
      className={`text-light-obsidian
       dark:text-dark-ice sm:text-h3 text-h5 leading-h5 sm:leading-h3  ${className}`}
    >
      {children}
    </h2>
  );
};

export const ThemedP = ({ children, className }: ThemedTextProps) => {
  return (
    <p
      className={`text-light-obsidian
         dark:text-dark-ice ${className}`}
    >
      {children}
    </p>
  );
};

export const ThemedPLarge = ({ children, className }: ThemedTextProps) => {
  return (
    <p
      className={`text-light-obsidian md:text-h5 md:leading-h5 text-p leading-p
         dark:text-dark-ice ${className}`}
    >
      {children}
    </p>
  );
};

export const ThemedSmall = ({ children, className }: ThemedTextProps) => {
  return (
    <p
      className={`text-light-obsidian  dark:text-dark-ice
      text-p0 leading-p0 ${className}`}
    >
      {children}
    </p>
  );
};

export function ThemedLi({ children, className }) {
  return (
    <li
      className={`flex gap-2 items-center text-base leading-base text-light-obsidian  dark:text-dark-ice ${className}`}
    >
      {children}
    </li>
  );
}

export function ThemedLiWithLogo({ children, className }) {
  return (
    <li
      className={`flex gap-2 max-w-xl items-center md:text-h5 text-base md:leading-h5 leading-base text-light-obsidian  dark:text-dark-ice ${className}`}
    >
     <SimpleLogoComponent />
      <p>{children}</p>
    </li>
  );
}




export const ShowCaseHeaderText = ({
  children,
  className,
}: ThemedTextProps) => {
  return (
    <h2
      className={`text-light-obsidian
       dark:text-dark-ice sm:text-h2 ml:text-h4 text-h5 ml:leading-h4 leading-h5 sm:leading-h2  ${className}`}
    >
      {children}
    </h2>
  );
};

export const ThemedH4 = ({ children, className }: ThemedTextProps) => {
  return (
    <h4
      className={`text-light-obsidian
     dark:text-dark-ice md:text-xl text-lg ${className}`}
    >
      {children}
    </h4>
  );
};

export const ThemedH5 = ({ children, className }: ThemedTextProps) => {
  return (
    <h5
      className={`text-light-obsidian
     dark:text-dark-ice md:text-lg text-md ${className}`}
    >
      {children}
    </h5>
  );
};
