import { ThemeContext } from "@/app/providers/themeProvider";
import Image from "next/image";
import { useContext } from "react";
import "./style.scss";

export default function ProfileBadge() {
  const { globalTheme } = useContext(ThemeContext);
  return (
    <div className="profileBadge">
      <Image
        className={`image-badge ${globalTheme}`}
        src="/images/profile.jpg"
        alt="profile"
        width={160}
        height={160}
      />
    </div>
  );
}
