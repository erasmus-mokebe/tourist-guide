import { useAuth0 } from '@auth0/auth0-react';

export const ProfileImage = () => {
  const { user } = useAuth0();

  return (
    <img
      src={user.picture}
      className='h-10 rounded-full border-2 box-border border-slate-200'
    ></img>
  );
};
