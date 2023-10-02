import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import "./style.scss";

export default function SwitchThemeMode() {
  const [themeMode, setThemeMode] = useState(false);

  const handleChange = () => {
    setThemeMode(!themeMode);
  };

  return (
    <div className="container-switch-theme-mode">
      {themeMode ? (
        <LightModeIcon sx={{ color: "#fe655c" }} />
      ) : (
        <DarkModeIcon sx={{ color: "#a5b3ce" }} />
      )}

      <Switch
        checked={themeMode}
        onChange={handleChange}
        name="checked"
        color="error"
        size="small"
      />
    </div>
  );
}
