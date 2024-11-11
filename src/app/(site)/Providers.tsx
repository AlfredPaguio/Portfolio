"use client";

import { ReactNode } from "react";
import ReduxProvider from "../store/ReduxProvider";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationHandler from "@/components/NavigationHandler";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        // disableTransitionOnChange
      >
        {children}
        {/* <NavigationHandler />  */}
      </ThemeProvider>
    </ReduxProvider>
  );
}
