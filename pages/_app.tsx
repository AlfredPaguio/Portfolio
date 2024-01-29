import NavigationHandler from "@/components/NavigationHandler";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationHandler />
      <Component {...pageProps} />
    </>
  );
}
