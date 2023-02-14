import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { SearchContact } from 'components/SearchContact/SearchContact';

export const Contacts = () => {
  return (
    <>
      <ContactForm />
      <SearchContact />
      <ContactList />
    </>
  );
};
