import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import BottomComponent from "@/components/BottomComponent";
import NavigationHandler from "@/components/NavigationHandler";
import ReduxProvider from "@/features/ReduxProvider";

const noto_serif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alfred's Portfolio",
  description:
    "Welcome to Alfred's portfolio! This portfolio showcases my skills and projects, built using TypeScript, React, and various other libraries and tools.",
  keywords: ["Next.js", "React", "TypeScript", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          noto_serif.className,
          "overflow-x-hidden flex h-svh min-h-svh w-screen flex-col justify-between bg-background text-foreground antialiased"
        )}
      >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <NavigationHandler />
            <main className="grow px-4 pb-4 md:px-16">{children}</main>
            <BottomComponent />
            <Toaster />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
