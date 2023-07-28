import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

import { refreshUser } from 'redux/auth/operations';
import { fetchContacts } from 'redux/contacts/operations';
import { useAuth } from 'hooks/useAuth';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
    if (isLoggedIn) dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/goit-react-hw-08-phonebook/register"
            element={
              <RestrictedRoute
                redirectTo="/goit-react-hw-08-phonebook/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/goit-react-hw-08-phonebook/login"
            element={
              <RestrictedRoute
                redirectTo="/goit-react-hw-08-phonebook/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/goit-react-hw-08-phonebook/contacts"
            element={
              <PrivateRoute
                redirectTo="/goit-react-hw-08-phonebook/login"
                component={<PhonebookPage />}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
