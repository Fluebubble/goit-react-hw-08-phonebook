import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '6px',
        borderBottom: 'solid 1px black',
      }}
    >
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}

      <UserMenu />
    </nav>
  );
};
