import { ThemeContext } from "@/app/providers/themeProvider";
import Link from "next/link";
import { useContext } from "react";
import "./style.scss";

interface ContactItemProps {
  icon: React.ElementType;
  content: string;
  type: string;
}
export default function ContactItem({ icon, content, type }: ContactItemProps) {
  const { globalTheme } = useContext(ThemeContext);
  const Icon = icon;
  return (
    <div className={`contact-item ${globalTheme}`}>
      <Icon />
      {type === "link" ? (
        <Link className={`${globalTheme}`} href={content} target="_blank">
          {content}
        </Link>
      ) : type === "mail" ? (
        <Link
          className={`${globalTheme}`}
          href={`mailto: ${content}`}
          target="_blank"
        >
          {content}
        </Link>
      ) : (
        <span className={`${globalTheme}`}>{content}</span>
      )}
    </div>
  );
}
