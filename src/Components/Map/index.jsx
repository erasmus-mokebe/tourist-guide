import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {

  const bounds = [[
    40.629343, 22.9455135
  ], [40.629303, 22.9455075]]

    return (
    <div style={{height: '900px'}}>
    <MapContainer style={{height: '900px'}} bounceAtZoomLimits={true} bounds={bounds} center={[40.629323, 22.9455095]} zoom={13} scrollWheelZoom={true} >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

    </MapContainer>
    </div>
  )
}

export default Map;