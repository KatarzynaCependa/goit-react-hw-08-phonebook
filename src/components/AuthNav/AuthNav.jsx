import { NavLink } from 'react-router-dom';
import css from 'components/AuthNav/AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.navWrapper}>
      <NavLink to="/register" className={css.navEl}>
        Register
      </NavLink>
      <NavLink to="login" className={css.navEl}>
        Log in
      </NavLink>
    </div>
  );
};