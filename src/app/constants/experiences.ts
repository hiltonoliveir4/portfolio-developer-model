import ExperienceInterface from "@/app/interfaces/ExperienceInterface";

export default function ExperienceList(): ExperienceInterface[] {
  return [
    {
      companyName: "Inforgeneses",
      position: "Full Stack Developer",
      descriptionJob:
        "My experience has extended to Backend development, creating APIs and routes for academic and financial systems, working with PHP, SQLServer, MySQL, and PostgreSQL databases. On the Frontend, I have replicated layouts and consumed APIs using HTML, CSS, and JavaScript. I have also played an essential role in modernizing legacy systems, improving user interfaces, and refactoring code for a more updated technology stack. My focus has been on creating maintainable, robust code with current technologies, balancing ongoing maintenance and innovation to enhance efficiency and the user experience.",
      timeExperience: "August 2021 - Present (2 years)",
      image: "/images/inforgeneses_logo.png",
    },
    {
      companyName: "EGMA",
      position: "Frontend Developer",
      descriptionJob:
        "My experience has focused on Frontend development, where I created screens and forms for the Maranhão School of Government website. I used HTML, CSS, and JavaScript to replicate layouts and ensure an intuitive and user-friendly interface. Additionally, I played a key role in modernizing the website, enhancing the user experience, and keeping the code up to date. My focus was on creating high-quality code, ensuring efficiency, and an improved user experience.",
      timeExperience: "February 2021 - August 2021 (7 Months)",
      image: "/images/egma_logo.jpg",
    },
  ];
}
