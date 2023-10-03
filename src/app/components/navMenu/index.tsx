"use client";

import { ThemeContext } from "@/app/providers/themeProvider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FolderIcon from "@mui/icons-material/Folder";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import NavMenuItem from "./navMenuItem";
import "./style.scss";

export default function NavMenu() {
  const [activeMenu, setActiveMenu] = useState(0);
  const { globalTheme } = useContext(ThemeContext);
  const router = useRouter();

  const switchActiveMenu = (index: number, route: string) => {
    setActiveMenu(index);
    router.push(`${route}`);
  };

  const navMenus = [
    { icon: AccountCircleIcon, title: "ABOUT", route: "/" },
    { icon: FolderIcon, title: "PROJECTS", route: "/pages/projects" },
    { icon: TextSnippetIcon, title: "RESUME", route: "/pages/resume" },
  ];

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
            onclick={() => switchActiveMenu(index, menu.route)}
          />
        ))}
      </ul>
    </nav>
  );
}
