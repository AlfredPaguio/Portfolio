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
      <Navbar />
      <main className="mb-auto pt-20">{children}</main>
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
    </Providers>
  );
}
