"use client";

import ProfileBadge from "@/app/components/profileBadge";
import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import "./style.scss";
import PrintPage from "@/app/components/utils";
import React from "react";

export default function Resume() {
  const { globalTheme } = useContext(ThemeContext);
  const resumeContentRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <section ref={resumeContentRef} className={`resume ${globalTheme}`}>
        <ProfileBadge />
        <div className={`resume-container ${globalTheme}`}>
          <div className={`title-container`}>
            <h1 className={`name ${globalTheme}`}>Hilton Oliveira Segundo</h1>
            <div className={`job ${globalTheme}`}>
              <h2>Desenvolvedor</h2>
              <PrintPage resumeContentRef={resumeContentRef} />
            </div>
          </div>
          <div className={`divider ${globalTheme}`}></div>
          <div className="data-container">
            <AboutMe />
            <Skills />
          </div>
        </div>
      </section>
    </>
  );
}
