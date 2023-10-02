"use client";

import { useState } from "react";
import NavMenu from "../navMenu";

export default function Header() {
  const [visibleNavMenu, setVisibleNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setVisibleNavMenu(!visibleNavMenu);
  };

  return (
    <header>
      <NavMenu />
    </header>
  );
}
