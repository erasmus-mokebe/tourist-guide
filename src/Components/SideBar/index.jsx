import { useSelector } from "react-redux";
import SidebarSingle from "./../SidebarSingle";

const SideBar = () => {
  const locations = useSelector((state) => state.locations).locations;
  const isOpen = useSelector((state) => state.sideBar.opened);
  const locationId = useSelector((state => state.currentPoint)).currentPoint;

  console.log(locationId);

  const currentLocation = locations.find(
    (location) => location.id === locationId
  );

  const allLocations = <>
  {locations.map(locatin => {
    return <SidebarSingle
    key={locatin.id}
    img="src/assets/img/places/david.jpg" // fotka bydzie z bazy danych
    name={locatin?.name}
    rating={locatin?.rating.score}
    type={locatin?.type}
    address={locatin?.place.street}
  /> 
  })}
  </>

  const location = <SidebarSingle
  img="src/assets/img/places/david.jpg" // fotka bydzie z bazy danych
  name={currentLocation?.name}
  rating={currentLocation?.rating.score}
  type={currentLocation?.type}
  address={currentLocation?.place.street}
/> 

  const sideBar = <section
      id="sidebar"
      className="hidden sm:flex w-1/3 h-full bg-white justify-center"
    >
      <div className="w-4/5">
        { currentLocation ? location : allLocations}
      </div>
    </section>
  

  return <>{isOpen ? sideBar : <></>}</>;
};
export default SideBar;
