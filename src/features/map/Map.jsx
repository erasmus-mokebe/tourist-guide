import { MapContainer, TileLayer } from "react-leaflet";
import { PointList } from "./PointList";

const { VITE_MAPBOX_USERNAME, VITE_MAPBOX_STYLE_ID, VITE_MAPBOX_ACCESS_TOKEN } =
  import.meta.env;

export const Map = () => {
  const bounds = [
    [40.8555371, 23.2052355],
    [40.3862896, 22.2904356],
  ];

  return (
    <div
      className={"absolute left-0 right-0 top-0 bottom-0 lg:static w-full z-10"}
    >
      <MapContainer
        maxBoundsViscosity={bounds}
        className="h-full"
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
