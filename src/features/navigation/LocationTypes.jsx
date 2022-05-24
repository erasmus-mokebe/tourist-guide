import UmbrellaIcon from '../../assets/icons/umbrella.svg';
import WeedIcon from '../../assets/icons/weed.svg';
import TreeIcon from '../../assets/icons/tree.svg';
import CutleryIcon from '../../assets/icons/cutlery.svg';
import ParkingIcon from '../../assets/icons/parking.svg';

const LocationType = props => (
  <div
    className='flex justify-center items-center gap-2 lg:w-8 h-8 py-1 px-6 lg:p-1 rounded-full cursor-pointer'
    style={{ backgroundColor: props.color }}
  >
    <img className='w-3/5 h-3/5' src={props.img} alt={props.alt} />
    <span className='lg:hidden text-white whitespace-nowrap'>{props.alt}</span>
  </div>
);

export const LocationTypes = props => (
  <div
    className={`${
      props.className ? props.className : ''
    } px-8 lg:p-0 h-full min-h-[3rem] flex gap-3 items-center overflow-x-scroll lg:overflow-x-auto`}
  >
    <LocationType color='#ED8B16' img={UmbrellaIcon} alt='rest in piss' />
    <LocationType color='#C2BB00' img={WeedIcon} alt='SPA' />
    <LocationType color='#E1523D' img={TreeIcon} alt='greenery' />
    <LocationType color='#005E54' img={CutleryIcon} alt='Restaurants' />
    <LocationType color='#003547' img={ParkingIcon} alt='Parking' />
  </div>
);
