import { siteConfig } from "@/config/site";
import { cn } from "@@/src/utils/cn";
import type { Metadata } from "next";
// import { Noto_Serif } from "next/font/google";
import "./globals.css";

// const noto_serif = Noto_Serif({ subsets: ["latin"] });

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
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth scrollbar-thin scrollbar-track-slate-400 scrollbar-thumb-slate-700" suppressHydrationWarning>
      <body className="min-w-full">
        <div
          className={cn(
            // noto_serif.className,
            "min-h-screen bg-background font-sans antialiased",
          )}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
