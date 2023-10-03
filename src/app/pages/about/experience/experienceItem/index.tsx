import { ThemeContext } from "@/app/providers/themeProvider";
import Image from "next/image";
import { useContext } from "react";
import "./style.scss";

interface ExperienceItemProps {
  title: string;
  time: string;
  description: string;
  image: string;
}
export default function ExperienceItem({
  title,
  time,
  description,
  image,
}: ExperienceItemProps) {
  const { globalTheme } = useContext(ThemeContext);
  return (
    <>
      <li className={`experience-item ${globalTheme}`}>
        <Image src={image} alt={title} width={200} height={200} />
        <div>
          <h3 className={`title-experience ${globalTheme}`}>{title}</h3>
          <span className={`time-experience ${globalTheme}`}>{time}</span>
          <p className={`description-experience ${globalTheme}`}>
            {description}
          </p>
        </div>
      </li>
    </>
  );
}
