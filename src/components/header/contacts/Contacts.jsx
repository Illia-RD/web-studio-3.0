import { ContactItem, ContactList } from './Contacts.styled';

export const Contacts = () => {
  return (
    <ContactList>
      <li>
        <ContactItem href="mailto:info@devstudio.com">
          info@devstudio.com
        </ContactItem>
      </li>
      <li>
        <ContactItem href="tel:+110001111111">+11 (000) 111-11-11</ContactItem>
      </li>
    </ContactList>
  );
};
