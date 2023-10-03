import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import "./style.scss";

interface TechBadgeProps {
  icon: React.ElementType;
  description: string;
}
export default function TechBadge({ icon, description }: TechBadgeProps) {
  const { globalTheme } = useContext(ThemeContext);
  const Icon = icon;

  return (
    <div className={`tech-badge ${globalTheme}`}>
      <Icon />
      <span className={`description-badge ${globalTheme}`}>{description}</span>
    </div>
  );
}
