import { ThemeContext } from "@/app/providers/themeProvider";
import { useContext } from "react";
import "./style.scss";

export default function Description() {
  const { globalTheme } = useContext(ThemeContext);
  return (
    <section className={`section-container ${globalTheme}`}>
      <h1 className={`name ${globalTheme}`}>Hilton Oliveira Segundo</h1>
      <p className={`text-content ${globalTheme}`}>
        With a strong background in Science and Technology and Computer
        Engineering, I am a developer who always seeks continuous learning. My
        professional journey encompasses a variety of projects that have allowed
        me to enhance my skills in both software development fronts, making me
        proficient in HTML and CSS, frameworks like React and Laravel, and
        languages such as PHP, Python, JavaScript, and TypeScript.
      </p>
      <button className={`btn ${globalTheme}`}>View Resume</button>
    </section>
  );
}
