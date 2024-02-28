import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import "./style.scss";
import AboutMeData from "@/app/constants/aboutme";

export default function Description() {
  const { globalTheme } = useContext(ThemeContext);
  const aboutMe = AboutMeData()
  return (
    <section className={`section-container ${globalTheme}`}>
      <h1 className={`name ${globalTheme}`}>Hilton Oliveira Segundo</h1>
      <p className={`text-content ${globalTheme}`}>
        {aboutMe.aboutMe}
      </p>
    </section>
  );
}
