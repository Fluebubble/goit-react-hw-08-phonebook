// import ContactForm from './ContactForm/ContactForm';
import { SearchContact } from 'components/SearchContact/SearchContact';
import ContactList from 'components/ContactList/ContactList';
import { NavLink, Outlet } from 'react-router-dom';
import ContactForm from 'components/ContactForm/ContactForm';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    // <p>Kek</p>
    <>
      <header
      // style={{ display: 'flex' }}
      >
        <Navigation />
      </header>

      <Outlet />
    </>
  );
};
