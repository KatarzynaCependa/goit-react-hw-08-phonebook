import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user?.name}</p>
      <button type="button">Logout</button>
    </div>
  );
};
