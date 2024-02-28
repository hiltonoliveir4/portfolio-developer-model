"use client";

import { ThemeContext } from "@/app/providers/themeProvider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FolderIcon from "@mui/icons-material/Folder";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useContext, useEffect, useMemo, useState } from "react";
import NavMenuItem from "./navMenuItem";
import "./style.scss";
import { usePathname  } from 'next/navigation';

export default function NavMenu() {
  const [activeMenu, setActiveMenu] = useState(0);
  const { globalTheme } = useContext(ThemeContext);
  const pathname = usePathname()

  const navMenus = useMemo(() => [
    { icon: AccountCircleIcon, title: "ABOUT", route: "/" },
    { icon: FolderIcon, title: "PROJECTS", route: "/pages/projects" },
    { icon: TextSnippetIcon, title: "RESUME", route: "/pages/resume" },
  ], []) ;

  useEffect(() => {
    const findIndex = navMenus.findIndex(menu => menu.route === pathname)
    setActiveMenu(findIndex)
  }, [pathname, navMenus])

  

  return (
    <nav className={`${[globalTheme]} nav-menu`}>
      <ul>
        {navMenus.map((menu, index) => (
          <NavMenuItem
            key={index}
            icon={menu.icon}
            title={menu.title}
            active={index === activeMenu}
            route={menu.route}
          />
        ))}
      </ul>
    </nav>
  );
}
