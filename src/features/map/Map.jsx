import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PointList } from './PointList';
import { useNavigate } from 'react-router-dom';

const { VITE_MAPBOX_USERNAME, VITE_MAPBOX_STYLE_ID, VITE_MAPBOX_ACCESS_TOKEN } = import.meta.env;

const Map = () => {
  const navigate = useNavigate();

  const bounds = [
    [40.6555371, 22.9052355],
    [40.5862896, 22.9904356]
  ];

  return (
    <div className={'absolute left-0 right-0 top-0 bottom-0 lg:static w-full z-10'}>
      <MapContainer
        maxBoundsViscosity={bounds}
        className='h-full'
        zoom={14}
        minZoom={13}
        maxBounds={bounds}
        bounds={bounds}
        bounceAtZoomLimits={true}
        center={[40.629323, 22.9455095]}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/${VITE_MAPBOX_USERNAME}/${VITE_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${VITE_MAPBOX_ACCESS_TOKEN}`}
        />

        <PointList />
      </MapContainer>
    </div>
  );
};

export default Map;