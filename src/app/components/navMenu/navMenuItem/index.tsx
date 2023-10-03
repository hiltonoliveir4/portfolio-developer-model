import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import "./style.scss";

interface NavMenuItemProps {
  title: string;
  icon: React.ElementType;
  active: boolean;
  onclick?: () => void;
}
export default function NavMenuItem({
  title,
  icon,
  active,
  onclick,
}: //   route,
NavMenuItemProps) {
  const { globalTheme } = useContext(ThemeContext);
  const Icon = icon;
  return (
    <li className={`${[globalTheme]}`}>
      <button className={`btn-nav-menu ${[globalTheme]}`} onClick={onclick}>
        <div className={`${[globalTheme]} ${active ? "active-menu" : ""}`}>
          <Icon sx={{ fontSize: 20 }} />
          {title && <span className={`${[globalTheme]}`}>{title}</span>}
        </div>
      </button>
    </li>
  );
}
