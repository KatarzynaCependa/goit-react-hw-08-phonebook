import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './Home.module.css';

import { logIn } from 'redux/auth/operations';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'© '}
      {new Date().getFullYear()}
      {' Developed by '}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/katarzyna-cependa/"
        className={css.linkEl}
      >
        Kasia Cependa
      </Link>{' '}
    </Typography>
  );
}

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTryItOut = () => {
    const loginElements = {
      email: 'liwifax598@wikfee.com',
      password: 'Guestaccount123',
    };

    dispatch(logIn(loginElements));
    navigate('/contacts');
  };

  return (
    <div className={css.headerWrapper}>
      <p className={css.header}>Welcome to Phonebook!</p>
      <p className={css.subtitle}>
        <NavLink to="/register" className={css.linkEl}>
          Register
        </NavLink>{' '}
        and create your own personal book of contacts
        <span style={{ display: 'block' }}>or</span>
      </p>
      <NavLink to="/contacts">
        <Button
          style={{ margin: '13px auto 0px auto' }}
          size="small"
          variant="contained"
          onClick={handleTryItOut}
        >
          Try it now as a Guest!
        </Button>
      </NavLink>
      <img
        alt="people"
        src={process.env.PUBLIC_URL + '/people.jpg'}
        className={css.headerImage}
      />
      <Copyright />
    </div>
  );
};

export default Home;
