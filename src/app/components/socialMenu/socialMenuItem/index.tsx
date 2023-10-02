import "./style.scss";

interface SocialItemProps {
  icon: React.ElementType;
  link: string;
}
export default function SocialItem({ icon, link }: SocialItemProps) {
  const Icon = icon;

  return (
    <a className="social-item" href={link} target="_blank">
      {<Icon sx={{ fontSize: 20 }} />}
    </a>
  );
}
