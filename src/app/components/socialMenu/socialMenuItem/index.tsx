import { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "@/app/providers/themeProvider";

interface SocialItemProps {
  icon: React.ElementType;
  link: string;
  name: string;
}
export default function SocialItem({ icon, link, name }: SocialItemProps) {
  const Icon = icon;
  const { globalTheme } = useContext(ThemeContext);

  return (
    <a className={`social-item ${globalTheme}`} href={link} target="_blank" aria-label={name}>
      {<Icon sx={{ fontSize: 20 }} />}
    </a>
  );
}
