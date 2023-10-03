"use client";

import ConstructIcon from "@/app/components/icons/ConstructIcon";
import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import "./style.scss";

export default function Resume() {
  const { globalTheme } = useContext(ThemeContext);

  return (
    <div className={`resume ${globalTheme}`}>
      <ConstructIcon />
      <h1 className={`title-resume ${globalTheme}`}>Coming soon</h1>
    </div>
  );
}
