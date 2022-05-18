import SideBar from "../../Components/SideBar";
import Map from "../../Components/Map";
import {useState, useEffect} from "react";

const Browser = () => {
  const [currentPoint, setCurrentPoint] = useState("");
  const endpoint = "locations";
  const url = window.location.origin;

  useEffect(() => {
    const fetchLocations = async () => (await fetch(`${url}/${endpoint}`)).body


  }, []);

  return <main className="flex-1 flex">
    <SideBar location={currentPoint} />
    <Map onPointClick={setCurrentPoint.bind(null, location)}/>
  </main>
};

export default Browser; 
