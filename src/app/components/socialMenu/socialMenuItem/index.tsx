import { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "@/app/providers/themeProvider";

interface SocialItemProps {
  icon: React.ElementType;
  link: string;
}
export default function SocialItem({ icon, link }: SocialItemProps) {
  const Icon = icon;
  const { globalTheme } = useContext(ThemeContext);

  return (
    <a className={`social-item ${globalTheme}`} href={link} target="_blank">
      {<Icon sx={{ fontSize: 20 }} />}
    </a>
  );
}
