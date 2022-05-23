import SideBar from "../../Components/SideBar";
import Map from "../../Components/Map";
import CurrentLocationButton from "../../Components/CurrentLocationButton";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocations } from "../../store/slices/locationsSlice";
import { openSideBar } from "../../store/slices/sideBarSlice";
const Browser = () => {
  const [currentPointId, setCurrentPointId] = useState("");
  const dispatch = useDispatch();
  const endpoint = "locations";
  const port = 8080;

  const host = `${window.location.protocol}//${window.location.hostname}`;

  useEffect(() => {
    const fetchLocations = async () => {
      return fetch(`${host}:${port}/${endpoint}`)
        .then((response) => {
          return response.json();
        })
        .then((locations) => {
          return locations;
        });
    };

    fetchLocations().then((locations) => {
      dispatch(setLocations(locations));
    });
  }, []);

  return (
    <main className="flex-1 flex">
      <SideBar />
      <Map />
    </main>
  );
};

export default Browser;
