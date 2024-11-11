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
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          {children}
        </main>
        <BottomComponent />
        <Toaster />
        {isEnabled && (
          <div className="fixed bottom-4 right-4 rounded-md bg-yellow-100 p-2 text-yellow-800 shadow-md">
            Draft mode ({cookies().get("ks-branch")?.value}){" "}
            <form method="POST" action="/preview/end">
              <button className="underline">End preview</button>
            </form>
          </div>
        )}
      </div>
    </Providers>
  );
}
