"use client";

import ConstructIcon from "@/app/components/icons/ConstructIcon";
import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import "./style.scss";

export default function Projects() {
  const { globalTheme } = useContext(ThemeContext);

  return (
    <div className={`projects ${globalTheme}`}>
      <ConstructIcon />
      <h1 className={`title-projects ${globalTheme}`}>Coming soon</h1>
    </div>
  );
}
