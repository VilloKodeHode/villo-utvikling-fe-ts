"use client";

import { AddScrollToElement } from "@logic/handleScroll";
// import { MouseOpacityEffect } from "@logic/mouseOpacityEffect";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const AppUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  AddScrollToElement();
  // MouseOpacityEffect();
  useEffect(() => {
    setIsThemeLoaded(true);
  }, [theme]);

  if (!isThemeLoaded) return null;

  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};
