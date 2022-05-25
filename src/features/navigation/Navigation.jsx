import { Button } from '../../common/Button';
import { SearchBar } from './SearchBar';
import { VerticalSeparator } from '../../common/VerticalSeparator';
import tripleDots from '../../assets/icons/triple-dots.svg';
import { LocationTypes } from './LocationTypes';
import { useSelector } from 'react-redux';
import { LoginStatus } from '../auth/LoginStatus';

import RightArrowIcon from '../../assets/icons/right-arrow.svg';

export const Navigation = () => {
  const sideBarOpen = useSelector(state => state.sideBar.opened);

  return (
    <nav
      className={`flex flex-col lg:flex-row box-border gap-5 z-50 lg:px-4 lg:py-3 w-full lg:h-16 ${
        sideBarOpen ? 'bg-white' : ''
      }`}
    >
      <div className='flex px-8 pt-6 lg:p-0 justify-center lg:justify-start'>
        <SearchBar />
      </div>
      <div className='flex flex-1 items-center lg:gap-3'>
        <LocationTypes />
        <VerticalSeparator />
        <img src={tripleDots} alt='see more' className='hidden lg:inline w-8 h-8' />
      </div>
      <div className='hidden justify-end lg:flex lg:flex-1 items-center gap-3'>
        <LoginStatus />
        <Button>
          <span className='flex-1 text-lg whitespace-nowrap'>Explore Thessaloniki</span>
          <img className='h-4' src={RightArrowIcon} alt='explore thessaloniki' />
        </Button>
      </div>
    </nav>
  );
};
