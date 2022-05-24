import { LocationCard } from './LocationCard';
import { useSelector } from 'react-redux';

export const LocationList = () => {
  const locations = useSelector(state => state.locations.locations);

  return (
    <div className='w-full p-5' style={{ direction: 'ltr' }}>
      {locations.map(location => (
        <LocationCard key={location.id} location={location}></LocationCard>
      ))}
    </div>
  );
};
