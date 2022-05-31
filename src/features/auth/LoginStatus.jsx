import { useAuth0 } from "@auth0/auth0-react";
import { ProfileExpand } from "./ProfileExpand";

export const LoginStatus = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) return <ProfileExpand/>;
  return <button onClick={loginWithRedirect}>Log in</button>;
};
