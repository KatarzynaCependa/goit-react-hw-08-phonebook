import { NavLink } from 'react-router-dom';
import css from 'components/AuthNav/AuthNav.module.css';

import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const AuthNav = () => {
  return (
    <div className={css.navWrapper}>
      <NavLink to="/register" className={css.navEl}>
        <AppRegistrationIcon />
        Register
      </NavLink>
      <NavLink to="/login" className={css.navEl}>
        <LoginIcon />
        Login
      </NavLink>
    </div>
  );
};
