import { useAuth0 } from '@auth0/auth0-react';
import { ProfileImage } from './ProfileImage';

export const LoginStatus = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return isAuthenticated ? <ProfileImage /> : <button onClick={loginWithRedirect}>Log in</button>;
};
