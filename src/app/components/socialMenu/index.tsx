import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SocialItem from "./socialMenuItem";
import "./style.scss";

export default function Social() {
  const socials = [
    {
      icon: LinkedInIcon,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hilton-oliveira-segundo-51b46314b/",
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
      link: "https://www.instagram.com/hiltonoliveir4/",
    },
    {
      icon: GitHubIcon,
      name: "Facebook",
      link: "https://github.com/hiltonoliveir4",
    },
    {
      icon: WhatsAppIcon,
      name: "WhatsApp",
      link: "https://whatsa.me/5598981799230/?t=Ol%C3%A1!%20%F0%9F%98%80",
    },
  ];

  return (
    <div className="social-container">
      {socials.map((social, index) => (
        <SocialItem key={index} icon={social.icon} link={social.link} name={social.name}/>
      ))}
    </div>
  );
}
