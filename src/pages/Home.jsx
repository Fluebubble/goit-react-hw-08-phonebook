import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';

export const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {!isLoggedIn && (
        <>
          <h1>Your Welcome, login or sign up</h1>
          <Link to="/register">Sign up</Link>
          <Link to="/login">Login</Link>
        </>
      )}
      {isLoggedIn && (
        <>
          <h1>Welcome, {user.name}</h1>
          <Link to="/contacts">Contacts</Link>
        </>
      )}
    </div>
  );
};
