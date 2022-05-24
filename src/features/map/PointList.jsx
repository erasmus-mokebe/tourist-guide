import { Marker } from "react-leaflet";
import { useSelector } from "react-redux";

export const PointList = ({ onMarkerClick }) => {
  const locations = useSelector((state) => state.locations.locations);

  if (!locations) return <></>;

  return locations.map(({ id, place }) => (
    <Marker
      key={id}
      position={place.coords}
      eventHandlers={{ click: () => onMarkerClick(id) }}
    />
  ));
};
