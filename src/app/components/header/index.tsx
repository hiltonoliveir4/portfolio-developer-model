"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import NavMenu from "../navMenu";
import Social from "../socialMenu";
import "./style.scss";
import SwitchThemeMode from "./switchThemeMode";
import { ThemeContext } from "@/app/providers/themeProvider";

export default function Header() {
  const [visibleNavMenu, setVisibleNavMenu] = useState(true);

  const toggleNavMenu = () => {
    setVisibleNavMenu(!visibleNavMenu);
  };

  const { globalTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className={`header-container ${[globalTheme]}`}>
        <div className="action-buttons-container">
          <button className={`${[globalTheme]} menu-icon`} onClick={toggleNavMenu}>
            {visibleNavMenu ? (
              <CloseIcon sx={{ fontSize: 24 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 24 }} />
            )}
          </button>

          <SwitchThemeMode />
        </div>

        <Social />

        <a className={`${[globalTheme]} contact-me`} href="mailto: hilton.segundo12@gmail.com">
          <SendIcon sx={{ fontSize: 16 }} />
          <span>Contact me!</span>
        </a>
      </div>
      {visibleNavMenu && <NavMenu />}
    </header>
  );
}
