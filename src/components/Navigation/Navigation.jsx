import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from 'components/Navigation/Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navEl}>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
