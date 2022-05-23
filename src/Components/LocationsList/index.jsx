import SidebarSingle from "./../SidebarSingle";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LocationsList = () => {
  const locations = useSelector((state) => state.locations.locations);

  useEffect(() => {
    console.log(locations);
  }, [locations]);

  return (
    <div className="w-4/5" style={{ direction: "ltr" }}>
      {locations.map((location) => (
        <SidebarSingle key={location.id} location={location}></SidebarSingle>
      ))}
    </div>
  );
};

export default LocationsList;
