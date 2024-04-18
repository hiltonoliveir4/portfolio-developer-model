import ExperienceInterface from "@/app/interfaces/ExperienceInterface";

export default function ExperienceList(): ExperienceInterface[] {
  return [
    {
      companyName: "iServApp",
      position: "Desenvolvedor Full Stack",
      descriptionJob:
        "Minha experiência está centrada no desenvolvimento de Frontend, utilizando React para criar componentes reutilizáveis, escalaveis e de facil manutenibilidade. Trabalho no backend com Laravel, onde desenvolvo rotas para a API, realizo manutenção do sistema e avalio melhorias potenciais. Além disso, participo ativamente do desenvolvimento de um moderador de conteúdo, utilizando tecnologias como Amazon Rekognition e Perspective API. Esta iniciativa visa alavancar recursos avançados de reconhecimento de imagem e análise de linguagem para aprimorar a moderação de conteúdo.",
      timeExperience: "7 meses",
      imageDark: "/images/logo-iservapp-light.svg",
      imageLight: "/images/logo-iservapp.svg",
    },
    {
      companyName: "Inforgeneses",
      position: "Desenvolvedor Full Stack",
      descriptionJob:
        "Minha experiência se estendeu ao desenvolvimento de Backend, criando APIs e rotas para sistemas acadêmicos e financeiros, trabalhando com bancos de dados PHP, SQLServer, MySQL e PostgreSQL. No Frontend, reproduzi layouts e consumi APIs utilizando HTML, CSS e JavaScript. Também desempenhei um papel essencial na modernização de sistemas legados, melhorando interfaces de usuário e refatorando código para uma pilha de tecnologia mais atualizada. Meu foco tem sido na criação de código sustentável e robusto com tecnologias atuais, equilibrando manutenção contínua e inovação para aprimorar eficiência e a experiência do usuário.",
      timeExperience: "2 anos e 9 meses",
      imageDark: "/images/logo_inforgeneses_dark.svg",
      imageLight: "/images/logo_inforgeneses.svg",
    },
    {
      companyName: "EGMA",
      position: "Desenvolvedor Frontend",
      descriptionJob:
        "Minha experiência tem se concentrado no desenvolvimento de Frontend, onde criei telas e formulários para o site da Escola de Governo do Maranhão. Utilizei HTML, CSS e JavaScript para reproduzir layouts e garantir uma interface intuitiva e amigável ao usuário. Além disso, desempenhei um papel fundamental na modernização do site, aprimorando a experiência do usuário e mantendo o código atualizado. Meu foco foi na criação de código de alta qualidade, garantindo eficiência e uma experiência de usuário aprimorada.",
      timeExperience: "7 meses",
      imageDark: "/images/logo_egma_dark.svg",
      imageLight: "/images/logo_egma.svg",
    },
  ];
}
