// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import css from 'components/RegisterForm/RegisterForm.module.css';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.target;
//     const registerElements = {
//       name: form.elements.username.value,
//       email: form.elements.email.value,
//       password: form.elements.password.value,
//     };

//     dispatch(register(registerElements));
//     form.reset();
//   };

//   return (
//     <div className={css.formWrapper}>
//       <form className={css.formEl} onSubmit={handleSubmit}>
//         <label>
//           <input
//             type="text"
//             name="username"
//             placeholder="username"
//             className={css.inputEl}
//           />
//         </label>
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
//         <button type="submit" className={css.registerButton}>
//           Sign up
//         </button>
//         <p>
//           Do you have an account? Log in
//           <a href="/goit-react-hw-08-phonebook/login" className={css.link}>
//             {' '}
//             here
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from 'components/RegisterForm/RegisterForm.module.css';

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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const registerElements = {
      name: form.elements.username.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(registerElements));
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="user-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/goit-react-hw-08-phonebook/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
