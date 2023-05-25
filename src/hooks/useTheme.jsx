import { useState } from "react";
import { THEMES } from "../constants";

export const useTheme = () => {
  const [theme, setTheme] = useState(THEMES.DEFAULT);

  const handleTheme = (option) => {
    const theme = THEMES[option];
    if (theme) setTheme(theme);
  };

  return [theme, handleTheme];
};
