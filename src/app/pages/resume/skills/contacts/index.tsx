import MailIcon from "@/app/components/icons/MailIcon";
import PhoneIcon from "@/app/components/icons/PhoneIcon";
import WebIcon from "@/app/components/icons/WebIcon";
import ContactItem from "./contactItem";

export default function Contacts() {
  return (
    <div className="contacts-container">
      <ContactItem icon={PhoneIcon} content="(98) 9 8179-9230" type="span" />
      <ContactItem
        icon={MailIcon}
        content="hilton.segundo12@gmail.com"
        type="mail"
      />
      <ContactItem icon={WebIcon} content="https://hilton.com.br" type="link" />
    </div>
  );
}
