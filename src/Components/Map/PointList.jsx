import { Marker, Popup } from 'react-leaflet'

const PointList = ({points, onPointClick}) => {
    
    if(!points) {
        return <span></span>;
    }
    
    const pointClickHandler = (event) => {
        onPointClick(event.latlng);
    }

    const Points = points.map((point, index) =>(
        <Marker key={index} position={point?.position} 
            eventHandlers={{
                click: (e) => {
                pointClickHandler(e)
            },
          }}>
            <Popup key={index + 1}>{point?.name}</Popup>
        </Marker>
    ))


    return <>{Points}</>;
}

export default PointList;