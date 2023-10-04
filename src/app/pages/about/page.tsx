"use client";

import ProfileBadge from "@/app/components/profileBadge";
import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import Description from "./description";
import Experience from "./experience";
import "./style.scss";
import LanguagesFrameworks from "./tecnologies";

export default function About() {
  const { globalTheme } = useContext(ThemeContext);

  return (
    <section className={`about ${globalTheme}`}>
      <ProfileBadge />
      <Description />
      <LanguagesFrameworks />
      <Experience />
    </section>
  );
}
