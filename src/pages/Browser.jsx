import { Map } from '../features/map/Map';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLocations } from '../store/slices/locationsSlice';

const Browser = props => {
  const dispatch = useDispatch();
  const host = `http://localhost:8080`;

  useEffect(() => {
    const fetchLocations = async () => {
      return fetch(`${host}/locations`)
        .then(response => {
          return response.json();
        })
        .then(locations => {
          return locations;
        });
    };

    fetchLocations().then(locations => {
      dispatch(setLocations(locations));
    });
  }, []);

  return (
    <div className='flex-1 flex'>
      {props.children}
      <Map />
    </div>
  );
};

export default Browser;
