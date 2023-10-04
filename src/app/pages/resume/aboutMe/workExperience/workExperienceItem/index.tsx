import ExperienceInterface from "@/app/interfaces/ExperienceInterface";
import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import "./style.scss";

export default function WorkExperienceItem({
  companyName,
  position,
  descriptionJob,
  timeExperience,
}: ExperienceInterface) {
  const { globalTheme } = useContext(ThemeContext);
  return (
    <div className={`${globalTheme} experience-item-container`}>
      <div className="company-data">
        <h5 className={`${globalTheme}`}>{timeExperience}</h5>
        <h5 className={`badge ${globalTheme}`}>{companyName}</h5>
      </div>
      <h4 className={`${globalTheme}`}>{position}d</h4>
      <p className={`${globalTheme}`}>{descriptionJob}</p>
    </div>
  );
}
