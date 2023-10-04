"use client";

import ProfileBadge from "@/app/components/profileBadge";
import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import "./style.scss";

export default function Resume() {
  const { globalTheme } = useContext(ThemeContext);

  return (
    <section className={`resume ${globalTheme}`}>
      <ProfileBadge />
      <div className={`resume-container ${globalTheme}`}>
        <div className={`title-container`}>
          <h1 className={`name ${globalTheme}`}>Hilton Oliveira Segundo</h1>
          <h2 className={`job ${globalTheme}`}>Desenvolvedor</h2>
        </div>
        <div className={`divider ${globalTheme}`}></div>
        <div className="data-container">
          <AboutMe />
          <Skills />
        </div>
      </div>
    </section>
  );
}
