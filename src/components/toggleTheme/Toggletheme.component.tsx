"use client";

import { useTheme } from "@/providers/theme.provider";
import MoonIcon from "@/icons/Moon";
import SunIcon from "@/icons/Sun";

const TogglethemeComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div onClick={toggleTheme} style={{ display: "flex" }}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </div>
    </>
  );
};

export default TogglethemeComponent;
