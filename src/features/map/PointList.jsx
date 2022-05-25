import { Marker } from "react-leaflet";
import { useSelector } from "react-redux";

export const PointList = ({ onMarkerClick }) => {
  const locations = useSelector((state) => state.locations.locations);
  const locationsFilters = useSelector((state) => state.locations.filters);

  if (!locations) return <></>;

  return locations.map(
    ({ id, place, type }) =>
      (locationsFilters.type === "all" || locationsFilters.type === type) && (
        <Marker
          key={id}
          position={place.coords}
          eventHandlers={{ click: () => onMarkerClick(id) }}
        />
      )
  );
};
