import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import css from 'components/AppBar/AppBar.module.css';

import MenuIcon from '@mui/icons-material/Menu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <header className={css.header}>
        <div className={css.navWrapper}>
          <Navigation />
          <MenuIcon />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
    </div>
  );
};
