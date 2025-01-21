interface ThemedTextProps {
    children: React.ReactNode;
    className?: string;
}

export const ThemedH1 = ({ children, className }: ThemedTextProps) => {
  return (
      <p className={`text-Villo-light-black
       dark:text-Villo-dark-white md:text-5xl text-4xl ${className}`}>
          {children}
      </p>
  )
}


export const ThemedP = ({ children, className }: ThemedTextProps) => {
    return (
        <p className={`text-Villo-light-black
         dark:text-Villo-dark-white ${className}`}>
            {children}
        </p>
    )
}

export const ThemedH2 = ({ children, className }: ThemedTextProps) => {
    return (
      <h4 className={`text-Villo-light-black
       dark:text-Villo-dark-white md:text-4xl text-3xl ${className}`}>
        {children}
      </h4>
    );
  };

export const ThemedH4 = ({ children, className }: ThemedTextProps) => {
  return (
    <h4 className={`text-Villo-light-black
     dark:text-Villo-dark-white md:text-xl text-lg ${className}`}>
      {children}
    </h4>
  );
};

export const ThemedH5 = ({ children, className }: ThemedTextProps) => {
  return (
    <h4 className={`text-Villo-light-black
     dark:text-Villo-dark-white md:text-lg text-md ${className}`}>
      {children}
    </h4>
  );
};

