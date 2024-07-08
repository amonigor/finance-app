import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <main className={`container mx-auto p-4 ${inter.className}`}>
        <Head>
          <title>Finance App</title>
        </Head>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
