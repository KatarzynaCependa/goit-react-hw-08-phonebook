import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

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

const Home = () => (
  <div className={css.headerWrapper}>
    <p className={css.header}>Welcome to Phonebook!</p>
    <p className={css.subtitle}>Create your own personal book of contacts.</p>
    <NavLink to="/register">
      <Button
        style={{ margin: '13px auto 0px auto' }}
        size="small"
        variant="contained"
        type="submit"
      >
        Try it now!
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

export default Home;
