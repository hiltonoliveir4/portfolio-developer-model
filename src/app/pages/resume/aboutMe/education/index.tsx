import EducationList from "@/app/constants/education";
import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import EducationItem from "./educationItem";
import "./style.scss";

export default function Education() {
  const educationList = EducationList();
  const { globalTheme } = useContext(ThemeContext);
  return (
    <div className={`education-container ${globalTheme}`}>
      {educationList.map((education, index) => (
        <EducationItem
          key={index}
          institute={education.institute}
          time={education.time}
          description={education.description}
        />
      ))}
    </div>
  );
}
