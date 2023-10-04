import ExperienceList from "@/app/constants/experiences";
import "./style.scss";
import WorkExperienceItem from "./workExperienceItem";

export default function WorkExperiences() {
  const experienceList = ExperienceList();
  return (
    <div className="experience-container">
      {experienceList.map((experience, index) => (
        <WorkExperienceItem
          key={index}
          companyName={experience.companyName}
          timeExperience={experience.timeExperience}
          descriptionJob={experience.descriptionJob}
          position={experience.position}
        />
      ))}
    </div>
  );
}
