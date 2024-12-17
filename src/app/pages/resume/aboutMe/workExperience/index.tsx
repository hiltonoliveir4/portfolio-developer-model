import ExperienceList from "@/app/constants/experiences";
import "./style.scss";
import WorkExperienceItem from "./workExperienceItem";

export default function WorkExperiences() {
  const experienceList = ExperienceList();
  return (
    <div className="work-experience-container">
      {experienceList.map((experience, index) => (
        <WorkExperienceItem
          key={index}
          companyName={experience.companyName}
          descriptionJob={experience.descriptionJob}
          position={experience.position}
          imageDark={experience.imageDark}
          imageLight={experience.imageLight}
          initExperience={experience.initExperience}
          finishExperience={experience.finishExperience}
        />
      ))}
    </div>
  );
}
