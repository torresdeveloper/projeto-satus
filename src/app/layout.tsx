import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/cards.css";
import { twMerge } from "tailwind-merge";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto Satus",
  description:
    "Equipe independente de desenvolvimento de software e inteligência artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;family=Roboto+Mono:wght@500&amp;family=Nanum+Pen+Script&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={twMerge(
          // inter.className,
          "home-template tag-hash-hide-videos font-1 bg-white dark:bg-gray-13 text-gray-900 dark:text-gray-200 font-medium flex duration-300 no-access post-access-public"
        )}
      >
        {children}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;family=Roboto+Mono:wght@500&amp;family=Nanum+Pen+Script&amp;display=swap"
          rel="stylesheet"
        ></link>
      </body>
    </html>
  );
}
