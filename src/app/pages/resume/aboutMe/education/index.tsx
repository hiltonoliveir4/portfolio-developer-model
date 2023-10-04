import EducationList from "@/app/constants/education";
import EducationItem from "./educationItem";
import "./style.scss";

export default function Education() {
  const educationList = EducationList();
  return (
    <div className={`education-container`}>
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
