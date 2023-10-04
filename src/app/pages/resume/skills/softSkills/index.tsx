import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";

export default function SoftSkills() {
  const softSkills = [
    "Proatividade",
    "Criatividade",
    "Adaptabilidade",
    "Extrovertido",
    "Inteligência Emocional",
    "Liderança",
  ];
  const { globalTheme } = useContext(ThemeContext);
  return (
    <ul className={`list-container`}>
      {softSkills.map((softSkill, index) => (
        <li key={index} className={`list-item-content-normal ${globalTheme}`}>
          {softSkill}
        </li>
      ))}
    </ul>
  );
}
