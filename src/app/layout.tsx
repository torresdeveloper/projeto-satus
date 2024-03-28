import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/cards.css";
import { twMerge } from "tailwind-merge";

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
      <body
        className={twMerge(
          // inter.className,
          "home-template tag-hash-hide-videos font-1 bg-white dark:bg-gray-13 text-gray-900 dark:text-gray-200 font-medium flex duration-300 no-access post-access-public"
        )}
      >
        {children}
      </body>
    </html>
  );
}
