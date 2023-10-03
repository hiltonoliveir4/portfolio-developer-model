"use client"
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const DARK_THEME = "dark";
export const LIGHT_THEME = "light";

type ThemeContextType = {
  globalTheme: string;
  setGlobalTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  globalTheme: "dark",
  setGlobalTheme: () => {},
});

interface ThemeContextParentProps {
  children: ReactNode;
}

export default function ThemeContextParent({
  children,
}: ThemeContextParentProps) {
  const [globalTheme, setGlobalTheme] = useState<string>(DARK_THEME);

  return (
    <ThemeContext.Provider value={{ globalTheme, setGlobalTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
