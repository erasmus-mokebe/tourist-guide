import Map from '../../asdasd/Map';
import CurrentLocationButton from '../../asdasd/CurrentLocationButton';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLocations } from '../../store/slices/locationsSlice';

const Browser = props => {
  const [currentPointId, setCurrentPointId] = useState('');
  const dispatch = useDispatch();
  const endpoint = 'locations';
  const port = 8080;

  const host = `http://localhost:8080`;

  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     return fetch(`${host}/${endpoint}`)
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(locations => {
  //         return locations;
  //       });
  //   };

  //   fetchLocations().then(locations => {
  //     dispatch(setLocations(locations));
  //   });
  // }, []);

  return (
    <div className='flex-1 flex'>
      {props.children}
      <Map onPointClick={locationId => setCurrentPointId(locationId)} />
      <CurrentLocationButton />
    </div>
  );
};

export default Browser;
