import { Navbar } from "@/components/Navbar";
import KeystaticApp from "./keystatic";
import { Metadata } from "next";
import { cookies, draftMode } from "next/headers";

export const metadata = {
  title: "Keystatic Admin",
  description: "Dashboard interface for author and manage this website",
} satisfies Metadata;

export default function Layout() {
  const { isEnabled } = draftMode();

  return (
    <div className="relative flex flex-col">
      <main>
        <KeystaticApp />
      </main>
      {isEnabled && (
        <div>
          Draft mode ({cookies().get("ks-branch")?.value}){" "}
          <form method="POST" action="/preview/end">
            <button>End preview</button>
          </form>
        </div>
      )}
    </div>
  );
}
