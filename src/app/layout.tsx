import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@@/src/utils/cn";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import BottomComponent from "@/components/BottomComponent";
import NavigationHandler from "@/components/NavigationHandler";
import ReduxProvider from "./store/ReduxProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cookies, draftMode } from "next/headers";

const noto_serif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Alfred's Portfolio",
    default: "Alfred's Portfolio",
  },
  description:
    "Welcome to Alfred's portfolio! This portfolio showcases my skills and projects, built using TypeScript, React, and various other libraries and tools.",
  keywords: ["Next.js", "React", "TypeScript", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body
        className={cn(
          noto_serif.className,
          "h-svh min-h-svh",
          "flex flex-col overflow-y-visible justify-between bg-background text-foreground antialiased"
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
            {isEnabled && (
              <div>
                Draft mode ({cookies().get("ks-branch")?.value}){" "}
                <form method="POST" action="/preview/end">
                  <button>End preview</button>
                </form>
              </div>
            )}
          </ThemeProvider>
        </ReduxProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
