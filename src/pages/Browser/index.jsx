import Map from "../../Components/Map";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocations } from "../../store/slices/locationsSlice";

const Browser = (props) => {
  const [currentPoint, setCurrentPoint] = useState("");
  const dispatch = useDispatch();
  const endpoint = "locations";
  const port = 8080;

  const host = `${window.location.protocol}//${window.location.hostname}`;

  useEffect(() => {
    console.log(`${host}:${port}/${endpoint}`);
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
    <div className="flex-1 flex">
      {props.children}
      <Map onPointClick={(locationId) => setCurrentPoint(locationId)} />
    </div>
  );
};

export default Browser;
