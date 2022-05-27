import { useSelector } from "react-redux";

export const SideBar = ({ children }) => {
  const isOpen = useSelector((state) => state.sideBar.opened);

  return (
    isOpen && (
      <section
        id="sidebar"
        className="flex flex-shrink-0 w-full lg:w-[400px] h-full bg-white justify-center z-40 overflow-auto"
      >
        {children}
      </section>
    )
  );
};
