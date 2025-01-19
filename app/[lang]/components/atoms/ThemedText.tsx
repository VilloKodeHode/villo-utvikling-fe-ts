interface ThemedTextProps {
    children: React.ReactNode;
    className?: string;
}

export const ThemedP = ({ children, className }: ThemedTextProps) => {
    return (
        <p className={`text-Villo-light-black
         dark:text-Villo-dark-white ${className}`}>
            {children}
        </p>
    )
}

export const Themedh2 = ({ children, className }: ThemedTextProps) => {
    return (
      <h4 className={`text-Villo-light-black
       dark:text-Villo-dark-white md:text-4xl text-3xl ${className}`}>
        {children}
      </h4>
    );
  };

export const Themedh4 = ({ children, className }: ThemedTextProps) => {
  return (
    <h4 className={`text-Villo-light-black
     dark:text-Villo-dark-white md:text-xl text-lg ${className}`}>
      {children}
    </h4>
  );
};

