"use client"


import { ThemeProvider } from "next-themes";


export const AppUserProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </>
  );
};
