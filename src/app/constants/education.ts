import EducationInterface from "../interfaces/EducationInterface";

export default function EducationList(): EducationInterface[] {
  return [
    {
      institute: "Universidade Federal do Maranhão",
      description: "Bacharelado Interdisciplinar em Ciência e Tecnologia",
      time: "May/2016 - December/2020",
    },
    {
      institute: "Universidade Federal do Maranhão",
      description: "Engenharia da Computação",
      time: "March/2021 - December/2023",
    },
  ];
}
