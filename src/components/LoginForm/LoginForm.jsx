// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
// import css from 'components/LoginForm/LoginForm.module.css';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.target;
//     const loginElements = {
//       email: form.elements.email.value,
//       password: form.elements.password.value,
//     };

//     dispatch(logIn(loginElements));
//     form.reset();
//   };

//   return (
//     <div className={css.formWrapper}>
//       <form className={css.formEl} onSubmit={handleSubmit}>
//         <label>
//           <input
//             type="email"
//             name="email"
//             placeholder="email"
//             className={css.inputEl}
//           />
//         </label>
//         <label>
//           <input
//             type="password"
//             name="password"
//             placeholder="password"
//             className={css.inputEl}
//           />
//         </label>
//         <button type="submit" className={css.loginButton}>
//           Log in
//         </button>
//         <p>
//           Don't have an account? Sign up
//           <a href="/goit-react-hw-08-phonebook/register" className={css.link}>
//             {' '}
//             here
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from 'components/LoginForm/LoginForm.module.css';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const defaultTheme = createTheme();

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const loginElements = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(loginElements));
    form.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link
                  href="/goit-react-hw-08-phonebook/register"
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
