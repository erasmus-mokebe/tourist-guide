import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { ProfileModal } from "./ProfileModal";

export const ProfileExpand = () => {
  const { user, logout } = useAuth0();
  const [opened, setOpened] = useState(false);

  const close = () => {
    setOpened(false);
  };

  useEffect(() => {
    if (!opened) return;
    addEventListener("click", close);
    return () => removeEventListener("click", close);
  }, [opened]);

  const cancelClose = (e) => e.stopPropagation();

  return (
    <div className="w-10 h-10 relative" onClick={cancelClose}>
      <img
        src={user.picture}
        alt={user.name}
        className="h-10 rounded-full border-2 box-border border-slate-200 cursor-pointer"
        onClick={() => setOpened(true)}
      />
      {opened && <ProfileModal user={user} logout={logout}/>}
    </div>
  );
};
