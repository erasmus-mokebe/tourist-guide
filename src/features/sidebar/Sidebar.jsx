import { useSelector } from "react-redux";

export const SideBar = ({ children }) => {
  const isOpen = useSelector((state) => state.sideBar.opened);

  const sideBar = (
    <section
      id="sidebar"
      className="flex w-full lg:min-w-[400px] lg:w-[400px] h-full bg-white justify-center z-40"
    >
      {children}
    </section>
  );

  return <>{isOpen && sideBar}</>;
};
