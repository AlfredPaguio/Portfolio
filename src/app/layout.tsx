import { siteConfig } from "@/config/site";
import { cn } from "@@/src/utils/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//favicons
import iconLight from "@@/public/favicon/light/favicon.ico";
import iconLight16 from "@@/public/favicon/light/favicon-16x16.png";
import iconLight32 from "@@/public/favicon/light/favicon-32x32.png";
import iconLight192 from "@@/public/favicon/light/android-chrome-192x192.png";
import iconLight512 from "@@/public/favicon/light/android-chrome-512x512.png";
import iconLightApple from "@@/public/favicon/light/apple-touch-icon.png";

import iconDark from "@@/public/favicon/dark/favicon.ico";
import iconDark16 from "@@/public/favicon/dark/favicon-16x16.png";
import iconDark32 from "@@/public/favicon/dark/favicon-32x32.png";
import iconDark192 from "@@/public/favicon/dark/android-chrome-192x192.png";
import iconDark512 from "@@/public/favicon/dark/android-chrome-192x192.png";
import iconDarkApple from "@@/public/favicon/dark/apple-touch-icon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: [
      {
        url: iconLight.src,
        type: "image/x-icon",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: iconDark.src,
        type: "image/x-icon",
      },
      {
        url: iconLight32.src,
        sizes: "32x32",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: iconDark32.src,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: iconLight16.src,
        sizes: "16x16",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: iconDark16.src,
        sizes: "16x16",
        type: "image/png",
      },

      //192
      {
        url: iconLight192.src,
        sizes: "192x192",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: iconDark192.src,
        sizes: "192x192",
        type: "image/png",
      },

      //512
      {
        url: iconLight512.src,
        sizes: "512x512",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: iconDark512.src,
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: iconLightApple.src,
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: iconDarkApple.src,
        type: "image/png",
      },
    ],
    // shortcut: "/favicon-16x16.png",
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
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-slate-400 scrollbar-thumb-slate-700 overflow-x-hidden scroll-smooth bg-ibelick-gradient-light dark:bg-ibelick-gradient-dark"
      suppressHydrationWarning
    >
      <body className="min-w-full">
        <div
          className={cn(inter.className, "min-h-screen font-light antialiased")}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
