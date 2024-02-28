import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import Education from "./education";
import "./style.scss";
import WorkExperiences from "./workExperience";
import AboutMeData from "@/app/constants/aboutme";

export default function AboutMe() {
  const { globalTheme } = useContext(ThemeContext);
  const aboutMe = AboutMeData()
  return (
    <div className="about-me-container">
      <h3 className={`${globalTheme}`}>SOBRE MIM</h3>
      <p className={`${globalTheme}`}>
        {aboutMe.aboutMe}
      </p>
      <div className={`divider ${globalTheme}`}></div>
      <h3 className={`${globalTheme}`}>EXPERIÊNCIAS PROFISSIONAIS</h3>
      <WorkExperiences />
      <div className={`divider ${globalTheme}`}></div>
      <h3 className={`${globalTheme}`}>FORMAÇÃO</h3>
      <Education />
    </div>
  );
}
