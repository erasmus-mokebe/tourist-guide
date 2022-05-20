import { Marker, Popup } from 'react-leaflet'
import { useSelector } from 'react-redux';

const PointList = ({onPointClick}) => {

    const locations = useSelector(state => state.locations).locations
    
    if(locations.length === 0) {
        return <span></span>;
    }
    
    const pointClickHandler = (event, id) => {
        onPointClick(id);
    }

    const Points = locations.map((point) => {
        const cords = point?.place.coords;
        const id = point?.id;

        return <Marker key={id} position={cords} 
            eventHandlers={{
                click: (e) => {
                pointClickHandler(e, id)
            },
          }}>
            <Popup key={id + 1}>{point?.name}</Popup>
        </Marker>
    })

    return <>{Points}</>;
}

export default PointList;