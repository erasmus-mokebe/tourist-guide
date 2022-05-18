import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from "react";
import PointList from "./PointList";
const {VITE_MAPBOX_USERNAME, VITE_MAPBOX_STYLE_ID, VITE_MAPBOX_ACCESS_TOKEN} = import.meta.env;

const Map = (props) => {

  const [points, setPoints] = useState([{
    position: [40.629323, 22.9455095],
    name: "AAAAAAAAAAAAAAAAAAAAAAAAAA"
  }, {
    position: [40.639323, 22.9855095],
    name: "Bruh1"
  }]);

  const bounds = [[
    40.6555371, 22.9052355
  ], [40.5862896, 22.9904356]]

    return (
    <div  className={"w-full"}>
    <MapContainer maxBoundsViscosity={bounds} style={{height: '900px'}} zoom={14} minZoom={13} maxBounds={bounds} bounceAtZoomLimits={true} bounds={bounds} center={[40.629323, 22.9455095]} scrollWheelZoom={true} >
        <TileLayer
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/${VITE_MAPBOX_USERNAME}/${VITE_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${VITE_MAPBOX_ACCESS_TOKEN}`}
        />

      <PointList onPointClick={props.onPointClick} points={points}/>

    </MapContainer>
    </div>
  )
}

export default Map;