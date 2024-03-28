import { HeaderAndSidebar } from "./HeaderAndSidebar";
import { MobileSecondarySidebar } from "./MobileSecondarySidebar";
import { SecondarySidebar } from "./SecondarySidebar";
import type { SecondarySidebarItem } from "./base.types";

export const BasePage = ({
  children,
  menu = "Home",
  secondaryItems = [],
  secondaryTitle,
}: {
  children: JSX.Element | JSX.Element[];
  menu: string;
  secondaryItems?: SecondarySidebarItem[];
  secondaryTitle?: string;
}) => {
  const showSecondaryItems = secondaryItems.length > 0;

  return (
    <>
      <HeaderAndSidebar menu={menu} />
      {showSecondaryItems && (
        <SecondarySidebar items={secondaryItems} title={secondaryTitle} />
      )}
      <div className="mx-auto w-full px-6 mb-6 lg:mb-12 mt-24 lg:mt-20">
        <div className="max-w-max-w-2 mx-auto">
          {showSecondaryItems && (
            <MobileSecondarySidebar
              items={secondaryItems}
              title={secondaryTitle}
            />
          )}
          {children}
        </div>
      </div>
    </>
  );
};
