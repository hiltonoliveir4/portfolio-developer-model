import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import Education from "./education";
import "./style.scss";
import WorkExperiences from "./workExperience";

export default function AboutMe() {
  const { globalTheme } = useContext(ThemeContext);
  return (
    <div className="about-me-container">
      <h3 className={`${globalTheme}`}>ABOUT ME</h3>
      <p className={`${globalTheme}`}>
        With a strong background in Science and Technology and Computer
        Engineering, I am a developer who always seeks continuous learning. My
        professional journey encompasses a variety of projects that have allowed
        me to enhance my skills in both software development fronts, making me
        proficient in HTML and CSS, frameworks like React and Laravel, and
        languages such as PHP, Python, JavaScript, and TypeScript.
      </p>
      <div className={`divider ${globalTheme}`}></div>
      <h3 className={`${globalTheme}`}>WORK EXPERIENCE</h3>
      <WorkExperiences />
      <div className={`divider ${globalTheme}`}></div>
      <h3 className={`${globalTheme}`}>EDUCATION</h3>
      <Education />
    </div>
  );
}
