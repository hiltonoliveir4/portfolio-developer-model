import EducationInterface from "../interfaces/EducationInterface";

export default function EducationList(): EducationInterface[] {
  return [
    {
      institute: "Universidade Federal do Maranhão",
      description: "GRADUAÇÃO EM CIÊNCIA E TECNOLOGIA",
      time: "Maio/2016 - Dezembro/2020",
    },
    {
      institute: "Universidade Federal do Maranhão",
      description: "Engenharia da Computação",
      time: "Mar/2021 - Dezembro/2023",
    },
  ];
}
