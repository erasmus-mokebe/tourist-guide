import { useAuth0 } from '@auth0/auth0-react';

export const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <span>Loading ...</span>;
  }

  if (error) {
    return <span>Failed to authenticate</span>;
  }

  return <>{children}</>;
};
