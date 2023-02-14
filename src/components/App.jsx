import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Home } from 'pages/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshLogin } from 'redux/auth/authOperations';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';

const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshLogin());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Loading</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/" component={<Register />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<Login />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<Contacts />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
