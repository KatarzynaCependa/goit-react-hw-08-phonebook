import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p>Welcome, {user?.name}</p>
      <Button
        size="small"
        variant="contained"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};
