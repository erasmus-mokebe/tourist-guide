import { Marker, useMapEvents } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const PointList = () => {
  const locations = useSelector(state => state.locations.locations);
  const locationsFilters = useSelector(state => state.locations.filters);
  
  const navigate = useNavigate()
  
  const map = useMapEvents({});

  const markerClickHandler = (id, point) => {
    navigate(`/${id}`);

    const cords = {
      lat: point.latlng.lat,
      lng: point.latlng.lng  + 0.001 
    };

    map.flyTo(cords, 18, {
      animate: true,
    });
  }


  if (!locations) return <></>;

  return locations.map(
    ({ id, place, type }) =>
      (locationsFilters.type === 'all' || locationsFilters.type === type) && (
        <Marker
          key={id}
          position={place.coords}
          eventHandlers={{ click: markerClickHandler.bind(null, id) }}
        />
      )
  );
};
