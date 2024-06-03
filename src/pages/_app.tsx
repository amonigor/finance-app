import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`container mx-auto p-4 ${inter.className}`}>
      <Head>
        <title>Finance App</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
