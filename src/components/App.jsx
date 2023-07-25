import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

// import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';

// const HomePage = lazy(() => import('../pages/Home/Home'));
// const RegisterPage = lazy(() => import('../pages/Register/Register'));
// const LoginPage = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.header}>Contacts</h2>
      <Filter />
      {isLoading ? <p>Loading contacts...</p> : <ContactList />}
      {error && <p>Data loading error</p>}
    </>
  );
};
