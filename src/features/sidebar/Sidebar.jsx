import { useSelector } from "react-redux";

export const SideBar = ({ children }) => {
  const isOpen = useSelector((state) => state.sideBar.opened);

  const sideBar = (
    <section
      id="sidebar"
      className="flex min-w-[400px] w-[400px] h-full bg-white z-40 flex-col relative"
    >
      {children}
    </section>
  );

  return <>{isOpen && sideBar}</>;
};
