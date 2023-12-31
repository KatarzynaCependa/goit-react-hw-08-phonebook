import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

import { refreshUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
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
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(refreshUser());
    if (isLoggedIn) {
      dispatch(fetchContacts(user.email !== 'liwifax598@wikfee.com'));
    }
  }, [dispatch, isLoggedIn, user.email]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
