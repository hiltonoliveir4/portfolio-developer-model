import BrazilIcon from "@/app/components/icons/BrazilFlagIcon";
import SpainIcon from "@/app/components/icons/SpainIcon";
import UsaIcon from "@/app/components/icons/UsaIcon";
import LanguageItem from "./language";
import "./style.scss";

export default function Languages() {
  const languages = [
    {
      icon: UsaIcon,
      level: "Basico",
      language: "Inglês",
    },
    {
      icon: BrazilIcon,
      level: "Nativo",
      language: "Português",
    },
    {
      icon: SpainIcon,
      level: "Basico",
      language: "Espanhol",
    },
  ];
  return (
    <ul className={`list-languages-container`}>
      {languages.map(({ icon, level, language }) => (
        <LanguageItem
          icon={icon}
          level={level}
          key={language}
          language={language}
        />
      ))}
    </ul>
  );
}
