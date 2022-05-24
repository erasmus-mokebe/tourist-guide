import { Marker } from 'react-leaflet';
import { useSelector } from 'react-redux';

export const PointList = ({ onPointClick }) => {
  const locations = useSelector(state => state.locations).locations;

  const pointClickHandler = (event, id) => {
    onPointClick(id);
  };

  return locations.map(point => {
    const cords = point?.place.coords;
    const id = point?.id;

    return (
      <Marker
        key={id}
        position={cords}
        eventHandlers={{
          click: e => {
            pointClickHandler(e, id);
          }
        }}
      ></Marker>
    );
  });
};
