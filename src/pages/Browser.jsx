import Map from "../features/map/Map";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocations } from "../store/slices/locationsSlice";
import { openSideBar } from "../store/slices/sideBarSlice";
import { useParams } from "react-router-dom";

const Browser = (props) => {
  const dispatch = useDispatch();
  const { locationId } = useParams();
  const host = `http://localhost:8080`;

  useEffect(() => {
    const fetchLocations = async () => {
      return fetch(`${host}/locations`)
        .then((response) => {
          return response.json();
        })
        .then((locations) => {
          return locations;
        })
        .catch((e) => {
          console.error("failed to connect to server :(");
        });
    };

    fetchLocations().then((locations) => {
      dispatch(setLocations(locations));
    });
  }, []);

  useEffect(() => {
    if (locationId) dispatch(openSideBar());
  }, [locationId]);

  return (
    <div className="flex-1 flex">
      {props.children}
      <Map />
    </div>
  );
};

export default Browser;
