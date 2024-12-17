import ExperienceInterface from "@/app/interfaces/ExperienceInterface";
import { ThemeContext } from "@/app/providers/themeProvider";
import Image from "next/image";
import { useContext } from "react";
import "./style.scss";
import { calculateDateDifference } from "@/app/utils/date";

export default function ExperienceItem({
  position,
  initExperience,
  finishExperience,
  descriptionJob,
  companyName,
  imageDark,
  imageLight,
}: ExperienceInterface) {
  const { globalTheme } = useContext(ThemeContext);
  const timeExperience = calculateDateDifference(initExperience, finishExperience)
  return (
    <>
      <li className={`experience-item ${globalTheme}`}>
        <Image
          className={globalTheme}
          src={globalTheme === "dark" ? imageDark : imageLight}
          alt={companyName}
          width={200}
          height={200}
          loading="lazy"
        />
        <div>
          <div className={`title-container`}>
            <h3 className={`title-experience ${globalTheme}`}>{position}</h3>
            <span className={`company-name ${globalTheme}`}>{companyName}</span>
          </div>
          <span className={`time-experience ${globalTheme}`}>
            {timeExperience}
          </span>
          <p className={`description-experience ${globalTheme}`}>
            {descriptionJob}
          </p>
        </div>
      </li>
    </>
  );
}
