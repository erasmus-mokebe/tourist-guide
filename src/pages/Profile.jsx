import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const Profile = withAuthenticationRequired(() => {
  const { user, logout } = useAuth0();

  return (
    <main>
      <img src={user.picture} alt="profile" />
      <span>{user.nickname}</span>
      <button
        className="bg-red-600 text-white px-3 py-2 rounded-lg ml-4"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        logout
      </button>
    </main>
  );
});
