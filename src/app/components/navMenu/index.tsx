import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import FolderIcon from "@mui/icons-material/Folder";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import NavMenuItem from "../navMenuItem";
import "./style.scss";

export default function NavMenu() {
  return (
    <nav className="nav-menu">
      <ul>
        <NavMenuItem icon={<AccountCircleIcon />} title="ABOUT" />
        <NavMenuItem icon={<FolderIcon />} title="PROJECTS" />
        <NavMenuItem icon={<TextSnippetIcon />} title=" RESUME" />
        <NavMenuItem className="close-nav" icon={<CloseIcon />} />
      </ul>
    </nav>
  );
}
