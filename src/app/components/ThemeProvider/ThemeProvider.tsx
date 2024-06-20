"use client";
import ThemeContext from "@/context/themeContext";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme")
      ? JSON.parse(localStorage.getItem("hotel-theme")!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  useEffect(() => {
    document.body.className = `${darkTheme ? "dark" : ""} min-h-screen`;
  }, [darkTheme]);

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <main className="dark:text-white dark:bg-black text-[#1E1E1E] font-normal">
        {children}
      </main>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
