import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from 'components/Navigation/Navigation.module.css';

import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.navWrapper}>
      <NavLink to="/" className={css.navEl}>
        <HomeIcon />
        <span className={css.desktopOnly}>Home</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navEl} to="/contacts">
          <ImportContactsIcon />
          <span className={css.desktopOnly}>Contacts</span>
        </NavLink>
      )}
    </div>
  );
};
