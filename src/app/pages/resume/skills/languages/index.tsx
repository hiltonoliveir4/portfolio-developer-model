import BrazilIcon from "@/app/components/icons/BrazilFlagIcon";
import SpainIcon from "@/app/components/icons/SpainIcon";
import UsaIcon from "@/app/components/icons/UsaIcon";
import LanguageItem from "./language";
import "./style.scss";

export default function Languages() {
  const languages = [
    {
      icon: UsaIcon,
      level: "Basic",
      language: "English",
    },
    {
      icon: BrazilIcon,
      level: "Native",
      language: "Portuguese",
    },
    {
      icon: SpainIcon,
      level: "Basic",
      language: "Spanish",
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
