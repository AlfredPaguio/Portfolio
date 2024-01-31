"use client";
import { usePathname } from "next/navigation";
// import { useRouter } from 'next/navigation';

import React from "react";
import { Footer } from "./Footer";
import ScrollMoreIndicator from "./ScrollMoreIndicator";

export default function BottomComponent() {
  // const router = useRouter();

  const pathname = usePathname();

  if (pathname === "/contact") {
    return <Footer />;
  }

  return <ScrollMoreIndicator />;
}
