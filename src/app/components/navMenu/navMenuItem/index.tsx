import { ThemeContext } from "@/app/providers/themeProvider";
import Link from "next/link";
import { useContext } from "react";
import "./style.scss";

interface NavMenuItemProps {
  title: string;
  icon: React.ElementType;
  active: boolean;
  route: string;
}
export default function NavMenuItem({
  title,
  icon,
  active,
  route,
}: NavMenuItemProps) {
  const { globalTheme } = useContext(ThemeContext);
  const Icon = icon;
  return (
    <li className={`${[globalTheme]}`}>
      <Link
        className={`btn-nav-menu ${[globalTheme]}`}
        href={route}
      >
        <div className={`${[globalTheme]} ${active ? "active-menu" : ""}`}>
          <Icon sx={{ fontSize: 20 }} />
          {title && <span className={`${[globalTheme]}`}>{title}</span>}
        </div>
      </Link>
    </li>
  );
}
