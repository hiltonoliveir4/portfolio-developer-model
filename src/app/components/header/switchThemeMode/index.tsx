import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Switch from "react-switch";
import { useState, useContext } from "react";
import "./style.scss";
import { ThemeContext } from '../../../providers/themeProvider';
import { display } from "@mui/system";

export default function SwitchThemeMode() {
  const { globalTheme, setGlobalTheme } = useContext(ThemeContext);
  const [themeMode, setThemeMode] = useState(globalTheme);

  const handleChange = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    setGlobalTheme(themeMode === 'light' ? 'dark' : 'light');
  };


  return (
    <div className="container-switch-theme-mode">
      <Switch
        checked={themeMode === 'light'}
        onChange={handleChange}
        height={24}
        width={44}
        handleDiameter={20}
        onColor="#fe655c"
        offColor="#a5b3ce"
        aria-label="Alterar tema"
        checkedIcon={<div className="icon-switch"><LightModeIcon sx={{height: 15, width: 15}}/></div>}
        uncheckedIcon={<div className="icon-switch"><DarkModeIcon sx={{height: 15, width: 15}}/></div>}
      />
    </div>
  );
}
