import { useState } from 'react';
import { Marker } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux';
import { updatePoint } from '../../store/slices/currentPointSlice';
import { closeSideBar, openSideBar } from '../../store/slices/sideBarSlice';

const PointList = () => {

    const [isSelected, setIsSelected] = useState(false);
    const dispatch = useDispatch();
    const locations = useSelector(state => state.locations).locations
    
    if(locations.length === 0) {
        return <span></span>;
    }
    
    const toggleSelection = () => {
        setIsSelected(prevState => !prevState);
    }

    const pointClickHandler = (event, id) => {

        if(isSelected) {
            toggleSelection();
            dispatch(updatePoint(null));
            dispatch(closeSideBar());
            return;
        }

        dispatch(updatePoint(id));
        dispatch(openSideBar());
        toggleSelection();

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
        </Marker>
    })

    return <>{Points}</>;
}

export default PointList;