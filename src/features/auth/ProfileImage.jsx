import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const ProfileImage = () => {
  const { user } = useAuth0();

  return (
    <Link to="/profile">
      <img
        src={user.picture}
        className="h-10 rounded-full border-2 box-border border-slate-200"
      ></img>
    </Link>
  );
};
