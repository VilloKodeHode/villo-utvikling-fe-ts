interface ThemedTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ThemedH1 = ({ children, className }: ThemedTextProps) => {
  return (
    <h1
      className={`text-light-black
       dark:text-dark-white md:text-5xl text-4xl ${className}`}
    >
      {children}
    </h1>
  );
};

export const ThemedP = ({ children, className }: ThemedTextProps) => {
  return (
    <p
      className={`text-light-black
         dark:text-dark-white ${className}`}
    >
      {children}
    </p>
  );
};

export const ThemedSmall = ({ children, className }: ThemedTextProps) => {
  return (
    <p
      className={`text-light-black  dark:text-dark-white
      text-p0 leading-p0 ${className}`}
    >
      {children}
    </p>
  );
};

export const ThemedH2 = ({ children, className }: ThemedTextProps) => {
  return (
    <h2
      className={`text-light-black
       dark:text-dark-white sm:text-h2 text-h4 leading-h4 sm:leading-h2  ${className}`}
    >
      {children}
    </h2>
  );
};

export const ShowCaseHeaderText = ({
  children,
  className,
}: ThemedTextProps) => {
  return (
    <h2
      className={`text-light-black
       dark:text-dark-white sm:text-h2 ml:text-h4 text-h5 ml:leading-h4 leading-h5 sm:leading-h2  ${className}`}
    >
      {children}
    </h2>
  );
};

export const ThemedH4 = ({ children, className }: ThemedTextProps) => {
  return (
    <h4
      className={`text-light-black
     dark:text-dark-white md:text-xl text-lg ${className}`}
    >
      {children}
    </h4>
  );
};

export const ThemedH5 = ({ children, className }: ThemedTextProps) => {
  return (
    <h5
      className={`text-light-black
     dark:text-dark-white md:text-lg text-md ${className}`}
    >
      {children}
    </h5>
  );
};
