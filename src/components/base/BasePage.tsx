import { twMerge } from "tailwind-merge";
import { AppearingDiv } from "./AppearingDiv";
import { HeaderAndSidebar } from "./HeaderAndSidebar";
import { MobileSecondarySidebar } from "./MobileSecondarySidebar";
import { SecondarySidebar } from "./SecondarySidebar";
import type { SecondarySidebarItem } from "./base.types";
import { motion } from "framer-motion";

export const BasePage = ({
  children,
  menu,
  secondaryItems = [],
  secondaryTitle,
  fullWidth = false,
}: {
  children: JSX.Element | JSX.Element[];
  menu: string;
  secondaryItems?: SecondarySidebarItem[];
  secondaryTitle?: string;
  fullWidth?: boolean;
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
      <HeaderAndSidebar menu={menu} />
      {showSecondaryItems && (
        <SecondarySidebar items={secondaryItems} title={secondaryTitle} />
      )}
      <div className="mx-auto w-full px-6 mb-6 lg:mb-12 mt-24 lg:mt-20">
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
