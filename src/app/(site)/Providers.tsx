"use client";

import { ReactNode } from "react";
import ReduxProvider from "../store/ReduxProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import NavigationHandler from "@/components/NavigationHandler";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <NuqsAdapter>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        // disableTransitionOnChange
      >
        {children}
        {/* <NavigationHandler />  */}
      </ThemeProvider>
      </NuqsAdapter>
    </ReduxProvider>
  );
}
