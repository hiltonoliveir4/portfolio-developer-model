import "./style.scss";

interface NavMenuItemProps {
  title?: string;
  className?: string;
  icon: React.ElementType;
  //   route: string;
  active: boolean;
  onclick?: () => void;
}
export default function NavMenuItem({
  title,
  icon,
  className,
  active,
  onclick,
}: //   route,
NavMenuItemProps) {
  const Icon = icon;
  return (
    <li className={className && className}>
      <button className={`btn-nav-menu`} onClick={onclick}>
        <div className={active ? "active-menu" : ""}>
          <Icon sx={{ fontSize: 20 }} />
          {title && <span>{title}</span>}
        </div>
      </button>
    </li>
  );
}
