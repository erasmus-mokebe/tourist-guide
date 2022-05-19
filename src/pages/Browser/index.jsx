import SideBar from '../../Components/SideBar';
import Map from '../../Components/Map';
import { useState, useEffect } from 'react';

const Browser = () => {
  const [currentPoint, setCurrentPoint] = useState('');

  const endpoint = 'locations';
  const port = 8080;

  const host = `${window.location.protocol}//${window.location.hostname}`;

  useEffect(() => {

    useEffect(() => {
      const fetchLocations = async () => {
        return fetch(`${host}:${port}/${endpoint}`)
        .then((response) => {
          return response.json();
        }).then((locations) => {
          return locations;  
        })    
      }
  
      fetchLocations().then(locations => {
        console.log(locations);
      })
    }, []);
  }, []);

  return (
    <main className='flex-1 flex'>
      <SideBar location={currentPoint} />
      <Map onPointClick={() => setCurrentPoint(location)} />
    </main>
  );
};

export default Browser;
