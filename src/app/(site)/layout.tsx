import Providers from "./Providers";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import BottomComponent from "@/components/BottomComponent";
import { cookies, draftMode } from "next/headers";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { isEnabled } = draftMode();

  return (
    <Providers>
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
    </Providers>
  );
}
