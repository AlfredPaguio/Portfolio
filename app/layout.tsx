import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

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
      <body className={noto_serif.className}>{children}</body>
    </html>
  );
}
