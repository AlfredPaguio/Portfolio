import KeystaticApp from "./keystatic";
import { Metadata } from "next";

export const metadata = {
  title: "Keystatic Admin",
  description: "Dashboard interface for author and manage this website",
} satisfies Metadata;

export default function Layout() {
  return <KeystaticApp />;
}