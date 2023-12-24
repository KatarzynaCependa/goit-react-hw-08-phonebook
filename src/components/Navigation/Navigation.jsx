import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from 'components/Navigation/Navigation.module.css';

import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navEl}>
      <NavLink to="/" className={css.navLink}>
        <HomeIcon />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navLink} to="/contacts">
          <ImportContactsIcon />
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
