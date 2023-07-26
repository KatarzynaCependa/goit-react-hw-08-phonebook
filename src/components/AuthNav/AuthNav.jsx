import { NavLink } from 'react-router-dom';
import css from 'components/AuthNav/AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.navWrapper}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="login">Log in</NavLink>
    </div>
  );
};
