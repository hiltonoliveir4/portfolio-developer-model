import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import Contacts from "./contacts";
import Languages from "./languages";
import SoftSkills from "./softSkills";
import "./style.scss";
import TechStack from "./techStack";

export default function Skills() {
  const { globalTheme } = useContext(ThemeContext);
  return (
    <div className={`skills-container ${globalTheme}`}>
      <h3 className={`${globalTheme}`}>CONTACTS</h3>
      <Contacts />
      <div className={`divider ${globalTheme}`}></div>

      <h3 className={`${globalTheme}`}>TECH STACK</h3>
      <TechStack />
      <div className={`divider ${globalTheme}`}></div>

      <h3 className={`${globalTheme}`}>SOFT SKILLS</h3>
      <SoftSkills />
      <div className={`divider ${globalTheme}`}></div>

      <h3 className={`${globalTheme}`}>LANGUAGES</h3>
      <Languages />
    </div>
  );
}
