import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log(shouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

// TODO: Допилить приватные и ограниченные маршруты
// TODO: Допилить фильтр контактов
// TODO: Создать велкомпейдж с двумя кнопками (регистрация и логин)
