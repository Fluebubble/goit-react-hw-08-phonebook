// import ContactForm from './ContactForm/ContactForm';
import { Outlet } from 'react-router-dom';
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
