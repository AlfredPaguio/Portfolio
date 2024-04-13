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
import { siteConfig } from "@/config/site";

const noto_serif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: "/opengraph-image.png",
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    locale: "en_US",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(noto_serif.className, "min-h-screen overflow-x-hidden overflow-y-scroll antialiased")}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
          >
            <NavigationHandler /> 
            <div className="relative flex min-h-svh flex-col">
              <Navbar />
              <main className="flex-1 px-4 md:px-16">{children}</main>
              <BottomComponent />
            </div>

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
