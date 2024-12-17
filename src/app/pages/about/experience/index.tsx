import ExperienceList from "@/app/constants/experiences";
import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import ExperienceItem from "./experienceItem";
import "./style.scss";

export default function Experience() {
  const experienceList = ExperienceList();

  const { globalTheme } = useContext(ThemeContext);
  return (
    <section className={`experience-container ${globalTheme}`}>
      <h2 className={`title ${globalTheme}`}>Experiências</h2>
      <ul className={`list-experience ${globalTheme}`}>
        {experienceList.map((experience, index) => (
          <ExperienceItem
            key={index}
            position={experience.position}
            descriptionJob={experience.descriptionJob}
            companyName={experience.companyName}
            imageDark={experience.imageDark}
            imageLight={experience.imageLight}
            initExperience={experience.initExperience}
            finishExperience={experience.finishExperience}
          />
        ))}
      </ul>
    </section>
  );
}
