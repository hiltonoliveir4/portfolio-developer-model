import EducationInterface from "../interfaces/EducationInterface";

export default function EducationList(): EducationInterface[] {
  return [
    {
      institute: "Universidade Federal do Maranhão",
      description: "Bacharelado Interdisciplinar em Ciência e Tecnologia",
      time: "Maio/2016 - Dezembro/2020",
    },
    {
      institute: "Universidade Federal do Maranhão",
      description: "Engenharia da Computação",
      time: "Março/2021 - Dezembro/2023",
    },
  ];
}
