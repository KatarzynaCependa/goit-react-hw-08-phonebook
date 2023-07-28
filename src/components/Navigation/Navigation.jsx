import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from 'components/Navigation/Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.navEl} to="/goit-react-hw-08-phonebook">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/goit-react-hw-08-phonebook/contacts">Contacts</NavLink>
      )}
    </nav>
  );
};
