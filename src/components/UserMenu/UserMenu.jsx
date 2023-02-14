import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/authOperations';
import { selectCredentials, selectIsLoggedIn } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const credentials = useSelector(selectCredentials);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ marginLeft: 'auto' }}>
      {!isLoggedIn && (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
      {isLoggedIn && (
        <div style={{ display: 'flex' }}>
          <p>{credentials.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};
