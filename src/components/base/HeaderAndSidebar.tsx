"use client";
import { useState } from "react";
import { BaseMobileHeader } from "./BaseMobileHeader";
import { BaseSidebar } from "./BaseSidebar";
import { useComponentDidMount } from "@/hooks/useComponentDidMount";

export const HeaderAndSidebar = ({ menu = "Home" }: { menu: string }) => {
  const [mobileOpened, setMobileOpened] = useState(false);

  useComponentDidMount(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (localStorage.theme === "light") {
      document.documentElement.classList.add("light");
    } else if (localStorage.theme === "auto" || !("theme" in localStorage)) {
      document.documentElement.classList.add("auto");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    }
    if (navigator.platform.indexOf("Mac") > -1) {
      document.documentElement.classList.add("mac");
    }
  });

  return (
    <>
      <BaseMobileHeader setMobileOpened={setMobileOpened} />
      <BaseSidebar
        menu={menu}
        mobileOpened={mobileOpened}
        setMobileOpened={setMobileOpened}
        setTheme={(theme: "light" | "dark" | "auto") => {
          document.documentElement.classList.remove("auto");
          document.documentElement.classList.remove("light");
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add(theme);
          localStorage.theme = theme;
        }}
      />
    </>
  );
};
