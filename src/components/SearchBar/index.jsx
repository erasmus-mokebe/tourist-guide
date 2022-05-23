import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSideBar } from '../../store/slices/sideBarSlice';
import Logo from '../Logo';

const SearchBar = () => {
  const dispatch = useDispatch();
  const sideBarOpened = useSelector(state => state.sideBar.opened);
  const input = useRef();

  const clearInput = () => {
    input.current.value = '';
  };

  return (
    <div className='flex items-center gap-5 rounded-lg w-full lg:w-80 bg-slate-100 h-full relative p-4 lg:py-0'>
      <Logo className='inline-block w-4 h-4' />
      <input
        className='flex-1 border-0 bg-transparent lg:placeholder:text-lg placeholder:font-semibold placeholder:text-gray-500 outline-none'
        type='text'
        placeholder='Search'
        ref={input}
        onFocus={() => {
          dispatch(openSideBar());
        }}
      />
      <div className='flex justify-center items-center absolute right-4 top-0 bottom-0'>
        <div className='flex items-center'>
          {sideBarOpened ? (
            <img className='cursor-pointer' src='src/assets/icons/x.svg' onClick={clearInput} />
          ) : (
            <>
              <SearchIcon className='hidden lg:inline' />
              <BurgerMenu className='inline lg:hidden' />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const SearchIcon = props => {
  return (
    <img
      src='src/assets/icons/search.svg'
      alt='search'
      className={`${props.className} w-9/12 h-9/12`}
    />
  );
};

const BurgerMenu = props => {
  const toggle = () => {
    // toggle the mobile menu
  };

  return (
    <img
      onClick={toggle}
      src='src/assets/icons/burger.svg'
      alt='search'
      className={`${props.className} w-9/12 h-9/12`}
    />
  );
};

export default SearchBar;
