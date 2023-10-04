import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import "./style.scss";

interface LanguageItemProps {
  language: string;
  icon: React.ElementType;
  level: string;
}
export default function LanguageItem({
  icon,
  level,
  language,
}: LanguageItemProps) {
  const Icon = icon;
  const { globalTheme } = useContext(ThemeContext);
  return (
    <li className={`languages-container`}>
      <div className="description-language-container">
        <Icon />
        <span className={`${globalTheme}`}>{language}</span>
      </div>
      <span className={`language-level ${globalTheme}`}>{level}</span>
    </li>
  );
}
