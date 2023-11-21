import ExperienceInterface from "@/app/interfaces/ExperienceInterface";

export default function ExperienceList(): ExperienceInterface[] {
  return [
    {
      companyName: "iServApp",
      position: "Full Stack Developer",
      descriptionJob:
        "My experience is centered around Frontend development, using React to create reusable components. I work on the backend with Laravel, where I develop routes for the API, perform system maintenance, and assess potential improvements. Additionally, I actively participate in the development of a content moderator, employing Amazon Rekognition and Perspective API technologies. This initiative aims to leverage advanced image recognition and language analysis features to enhance content moderation, ensuring a safer online environment in line with desired standards. My contribution involves integrating these tools, providing a comprehensive and effective approach to content management and control on the platform.",
      timeExperience: "October 2023 - Present (2 months)",
      imageDark: "/images/logo-iservapp-light.svg",
      imageLight: "/images/logo-iservapp.svg",
    },
    {
      companyName: "Inforgeneses",
      position: "Full Stack Developer",
      descriptionJob:
        "My experience has extended to Backend development, creating APIs and routes for academic and financial systems, working with PHP, SQLServer, MySQL, and PostgreSQL databases. On the Frontend, I have replicated layouts and consumed APIs using HTML, CSS, and JavaScript. I have also played an essential role in modernizing legacy systems, improving user interfaces, and refactoring code for a more updated technology stack. My focus has been on creating maintainable, robust code with current technologies, balancing ongoing maintenance and innovation to enhance efficiency and the user experience.",
      timeExperience: "August 2021 - Present (2 years)",
      imageDark: "/images/logo_inforgeneses_dark.svg",
      imageLight: "/images/logo_inforgeneses.svg",
    },
    {
      companyName: "EGMA",
      position: "Frontend Developer",
      descriptionJob:
        "My experience has focused on Frontend development, where I created screens and forms for the Maranhão School of Government website. I used HTML, CSS, and JavaScript to replicate layouts and ensure an intuitive and user-friendly interface. Additionally, I played a key role in modernizing the website, enhancing the user experience, and keeping the code up to date. My focus was on creating high-quality code, ensuring efficiency, and an improved user experience.",
      timeExperience: "February 2021 - August 2021 (7 Months)",
      imageDark: "/images/logo_egma_dark.svg",
      imageLight: "/images/logo_egma.svg",
    },
  ];
}
