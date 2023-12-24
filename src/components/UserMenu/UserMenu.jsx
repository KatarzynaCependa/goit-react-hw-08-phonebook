import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p>Welcome, {user?.name}</p>
      <div onClick={handleLogout}>
        <LogoutIcon className={css.logoutIcon} />
      </div>
    </div>
  );
};
