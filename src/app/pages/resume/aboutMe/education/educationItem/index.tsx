import GraduationCapIcon from "@/app/components/icons/GraduationCapIcon";
import EducationInterface from "@/app/interfaces/EducationInterface";
import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import "./style.scss";

export default function EducationItem({
  institute,
  time,
  description,
}: EducationInterface) {
  const { globalTheme } = useContext(ThemeContext);
  return (
    <div className={`education-item-container ${globalTheme}`}>
      <div className="title-graduation-container">
        <GraduationCapIcon />
        <h4 className={`${globalTheme}`}>{description}</h4>
      </div>
      <h5 className={`${globalTheme}`}>{institute}</h5>
      <span className={`${globalTheme}`}>{time}</span>
    </div>
  );
}
