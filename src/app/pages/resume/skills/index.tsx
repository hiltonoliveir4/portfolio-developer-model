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
      <h3 className={`${globalTheme}`}>CONTATOS</h3>
      <Contacts />
      <div className={`divider ${globalTheme}`}></div>

      <h3 className={`${globalTheme}`}>TECNOLOGIAS</h3>
      <TechStack />
      <div className={`divider ${globalTheme}`}></div>

      <h3 className={`${globalTheme}`}>SOFT SKILLS</h3>
      <SoftSkills />
      <div className={`divider ${globalTheme}`}></div>

      <h3 className={`${globalTheme}`}>LÍNGUAS</h3>
      <Languages />
    </div>
  );
}
