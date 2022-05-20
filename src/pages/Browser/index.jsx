import SideBar from "../../Components/SideBar";
import Map from "../../Components/Map";
import LocationsList from "../../Components/LocationsList";
import { useState, useEffect } from "react";

const Browser = ({ content }) => {
    const [currentPoint, setCurrentPoint] = useState("");

    const endpoint = "locations";
    const port = 8080;

    const host = `${window.location.protocol}//${window.location.hostname}`;

    useEffect(() => {
        const fetchLocations = async () =>
            (await fetch(`${host}:${port}/${endpoint}`)).body;
        fetchLocations();
    }, []);

    return (
        <main className="flex-1 flex">
            <SideBar content={content} />
            <Map onPointClick={() => setCurrentPoint(location)} />
        </main>
    );
};

export default Browser;
