import React from 'react';
import css from './Home.module.css';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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
    <p className={css.header}>Welcome to Phonebook</p>
    <img
      alt="people"
      src={process.env.PUBLIC_URL + '/people.jpg'}
      className={css.headerImage}
    />
    <Copyright sx={{ mt: 5 }} />
  </div>
);

export default Home;
