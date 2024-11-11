"use client";
import { usePathname } from "next/navigation";
// import { useRouter } from 'next/navigation';

import React from "react";
import { Footer } from "./Footer";
import ScrollMoreIndicator from "./ScrollMoreIndicator";
import FooterCompact from "./FooterCompact";

export default function BottomComponent() {
  // const router = useRouter();

  const pathname = usePathname();

  // if (pathname === "/projects") {
  //   return <Footer />;
  // }

  if (pathname.startsWith("/projects/")) {
    return <FooterCompact />;
  }

  // return <ScrollMoreIndicator />;
  return <Footer />;
}
