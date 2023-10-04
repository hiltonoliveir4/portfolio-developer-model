import CodeIgniterIcon from "@/app/components/icons/CodeIgniterIcon";
import CssIcon from "@/app/components/icons/CssIcon";
import HtmlIcon from "@/app/components/icons/HtmlIcon";
import JavaScriptIcon from "@/app/components/icons/JavaScriptIcon";
import LaravelIcon from "@/app/components/icons/LaravelIcon";
import PhpIcon from "@/app/components/icons/PhpIcon";
import PythonIcon from "@/app/components/icons/PythonIcon";
import ReactIcon from "@/app/components/icons/ReactIcon";
import SassIcon from "@/app/components/icons/SassIcon";
import TypeScriptIcon from "@/app/components/icons/TypescriptIcon";
import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import "./style.scss";
import TechBadge from "./tecnologies-badge";

export default function LanguagesFrameworks() {
  const { globalTheme } = useContext(ThemeContext);

  const techs = [
    { description: "JavaScript", icon: JavaScriptIcon },
    { description: "HTML", icon: HtmlIcon },
    { description: "CSS", icon: CssIcon },
    { description: "Sass", icon: SassIcon },
    { description: "TypeScript", icon: TypeScriptIcon },
    { description: "React", icon: ReactIcon },
    { description: "PHP", icon: PhpIcon },
    { description: "CodeIgniter", icon: CodeIgniterIcon },
    { description: "Laravel", icon: LaravelIcon },
    { description: "Python", icon: PythonIcon },
  ];

  return (
    <div className={`tecnologies-container ${globalTheme}`}>
      <h2 className={`name ${globalTheme}`}>Languages & Frameworks</h2>
      <ul className={`list-technologies ${globalTheme}`}>
        {techs.map((tech, index) => (
          <TechBadge
            key={index}
            description={tech.description}
            icon={tech.icon}
          />
        ))}
      </ul>
    </div>
  );
}
