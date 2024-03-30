"use server";
import { twMerge } from "tailwind-merge";
import { AppearingDiv } from "./AppearingDiv";
import { HeaderAndSidebar } from "./HeaderAndSidebar";
import { MobileSecondarySidebar } from "./MobileSecondarySidebar";
import { SecondarySidebar } from "./SecondarySidebar";
import type { SecondarySidebarItem } from "./base.types";
import { PageProps } from "@/hooks/useServerPageProps";

export const BasePage = ({
  children,
  menu,
  secondaryItems = [],
  secondaryTitle,
  fullWidth = false,
  pageProps,
}: {
  children: JSX.Element | JSX.Element[];
  menu: string;
  secondaryItems?: SecondarySidebarItem[];
  secondaryTitle?: string;
  fullWidth?: boolean;
  pageProps: PageProps;
}) => {
  const showSecondaryItems = secondaryItems.length > 0;

  return (
    <>
      <>
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
      </>
      <HeaderAndSidebar menu={menu} pageProps={pageProps} />
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[-1] after:absolute after:top-[-70px] after:left-[-20rem] after:-z-20 after:h-[75vh] after:w-full sm:after:w-full after:bg-gradient-radial after:from-[#FBF0D7] after:via-[#FBF0D7] after:opacity-30 after:blur-2xl after:content-[''] after:dark:from-[#6f3401] after:dark:via-[#bc6407] after:dark:opacity-10"></div>
      {showSecondaryItems && (
        <SecondarySidebar items={secondaryItems} title={secondaryTitle} />
      )}
      <div
        className={twMerge("mx-auto w-full px-6 mb-6 lg:mb-12 mt-24 lg:mt-20")}
      >
        <div className={twMerge(fullWidth ? "" : "max-w-max-w-2 mx-auto")}>
          {showSecondaryItems && (
            <MobileSecondarySidebar
              items={secondaryItems}
              title={secondaryTitle}
            />
          )}
          <AppearingDiv>{children}</AppearingDiv>
        </div>
      </div>
    </>
  );
};
