import { useSelector } from "react-redux";
import SidebarSingle from "./../SidebarSingle";

const SideBar = ({ locationId }) => {
  const locations = useSelector((state) => state.locations).locations;
  const isOpen = useSelector((state) => state.sideBar.opened);

  console.log(isOpen);

  const currentLocation = locations.find(
    (location) => location.id === locationId
  );

  const sideBar = (
    <section
      id="sidebar"
      className="flex w-full sm:w-1/3 h-full bg-white justify-center z-40"
    >
      <div className="w-4/5">
        <SidebarSingle
          img="src/assets/img/places/david.jpg" // fotka bydzie z bazy danych
          name={currentLocation?.name}
          rating={currentLocation?.rating.score}
          type={currentLocation?.type}
          address={currentLocation?.place.street}
        />
      </div>
    </section>
  );

  return <>{isOpen && sideBar}</>;
};
export default SideBar;
