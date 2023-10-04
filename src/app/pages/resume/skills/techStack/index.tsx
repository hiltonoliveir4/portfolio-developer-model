import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";

export default function TechStack() {
  const techs = [
    "HTML",
    "CSS",
    "PHP",
    "JavaScript",
    "TypeScript",
    "React",
    "Laravel",
    "Python",
    "Git",
    "Gitlab",
    "Linux",
    "SCRUM",
  ];

  const { globalTheme } = useContext(ThemeContext);
  return (
    <ul className={`list-container`}>
      {techs.map((tech, index) => (
        <li key={index} className={`list-item-content-normal ${globalTheme}`}>
          {tech}
        </li>
      ))}
      <span></span>
    </ul>
  );
}
