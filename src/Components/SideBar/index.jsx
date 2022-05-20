import { useSelector } from 'react-redux';
import SidebarSingle from './../SidebarSingle';

const SideBar = ({locationId}) => {

  const locations = useSelector(state => state.locations).locations;

  const currentLocation = locations.find(location => location.id === locationId)

  console.log(currentLocation);

  return (
    <section id='sidebar' className='hidden sm:flex w-1/3 h-full bg-white justify-center'>
      
      {!currentLocation ? "No point selected" : <div className='w-4/5'>
        <SidebarSingle
          img='src/assets/img/places/david.jpg' // fotka bydzie z bazy danych
          name={currentLocation.name}
          rating={currentLocation.rating.score}
          type={currentLocation.type}
          address={currentLocation.place.street}
        />
      </div>
      }
    </section>
  );
};
export default SideBar;
