"use client";

import { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "@/app/providers/themeProvider";

export default function About() {
  const { globalTheme } = useContext(ThemeContext);

  return <div className={`about-container ${globalTheme}`}></div>;
}
