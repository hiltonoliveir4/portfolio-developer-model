import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import ExperienceItem from "./experienceItem";
import "./style.scss";

export default function Experience() {
  const experienceList = [
    {
      title: "Full Stack Developer",
      time: "August 2021 - Present (2 years)",
      description: `
        My experience has extended to Backend development, creating APIs and
        routes for academic and financial systems, working with PHP, SQLServer,
        MySQL, and PostgreSQL databases. On the Frontend, I have replicated
        layouts and consumed APIs using HTML, CSS, and JavaScript. I have also
        played an essential role in modernizing legacy systems, improving user
        interfaces, and refactoring code for a more updated technology stack. My
        focus has been on creating maintainable, robust code with current
        technologies, balancing ongoing maintenance and innovation to enhance
        efficiency and the user experience.
      `,
      image: "/images/inforgeneses_logo.png",
    },
    {
      title: "Frontend Developer",
      time: "February 2021 - August 2021 (7 Months)",
      description: `
      My experience has focused on Frontend development, where I created
      screens and forms for the Maranhão School of Government website. I used
      HTML, CSS, and JavaScript to replicate layouts and ensure an intuitive
      and user-friendly interface. Additionally, I played a key role in
      modernizing the website, enhancing the user experience, and keeping the
      code up to date. My focus was on creating high-quality code, ensuring
      efficiency, and an improved user experience.
      `,
      image: "/images/egma_logo.jpg",
    },
  ];

  const { globalTheme } = useContext(ThemeContext);
  return (
    <section className={`experience-container ${globalTheme}`}>
      <h2 className={`title ${globalTheme}`}>Experience</h2>
      <ul className={`list-experience ${globalTheme}`}>
        {experienceList.map((experience, index) => (
          <ExperienceItem
            key={index}
            title={experience.title}
            time={experience.time}
            description={experience.description}
            image={experience.image}
          />
        ))}
      </ul>
    </section>
  );
}
