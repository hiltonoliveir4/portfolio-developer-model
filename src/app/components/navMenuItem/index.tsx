import { ReactElement } from "react";
import "./style.scss";

interface NavMenuItemProps {
  title?: string;
  className?: string;
  icon: ReactElement;
  //   route: string;
  //   active: boolean;
  //   onclick: () => void;
}
export default function NavMenuItem({
  title,
  icon,
  className,
}: //   route,
//   active,
//   onclick,
NavMenuItemProps) {
  return (
    <li className={className ? className : ""}>
      <button className="btn-nav-menu">
        <div>
          {icon}
          {title && <span>{title}</span>}
        </div>
      </button>
    </li>
  );
}
