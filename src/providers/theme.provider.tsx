"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type theme = "light" | "dark";

type ThemeContextType = {
  theme: theme;
  toggleTheme: () => void;
};

type Props = PropsWithChildren;

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.body.setAttribute("data-theme", theme);
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.style.colorScheme = theme;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
