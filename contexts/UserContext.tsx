"use client";

import { AddScrollToElement } from "@utils/handleScroll";
// import { MouseOpacityEffect } from "@utils/mouseOpacityEffect";
import { ThemeProvider } from "next-themes";

export const AppUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  AddScrollToElement();
  // MouseOpacityEffect();

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};
