"use client";

import CloseIcon from "@mui/icons-material/Close";

import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import NavMenu from "../navMenu";
import Social from "../socialMenu";
import "./style.scss";
import SwitchThemeMode from "./switchThemeMode";

export default function Header() {
  const [visibleNavMenu, setVisibleNavMenu] = useState(true);

  const toggleNavMenu = () => {
    setVisibleNavMenu(!visibleNavMenu);
  };

  return (
    <header>
      <div className="header-container">
        <div className="action-buttons-container">
          <button className="menu-icon" onClick={toggleNavMenu}>
            {visibleNavMenu ? (
              <CloseIcon sx={{ fontSize: 24 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 24 }} />
            )}
          </button>

          <SwitchThemeMode />
        </div>

        <Social />

        <a className="contact-me" href="mailto: hilton.segundo12@gmail.com">
          <SendIcon sx={{ fontSize: 16 }} />
          <span>Contact me!</span>
        </a>
      </div>
      {visibleNavMenu && <NavMenu />}
    </header>
  );
}
