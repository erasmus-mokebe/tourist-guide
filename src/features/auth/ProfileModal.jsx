export const ProfileModal = ({ user, logout }) => {
  return <dialog
    className="absolute top-full translate-y-2 w-64 bg-white shadow left-[50%] -translate-x-[50%] py-6 px-8 flex flex-col items-center rounded-2xl"
  >
    <img src={user.picture} alt={user.name}
         className="w-20 h-20 rounded-full bg-blue-500 select-none"/>
    <p className="mt-4 text-xl font-bold">{user.name}</p>
    <button
      className="bg-gray-100 px-3 py-2 rounded-lg mt-4 w-full hover:bg-black hover:text-white"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Sign out
    </button>
  </dialog>;
};
