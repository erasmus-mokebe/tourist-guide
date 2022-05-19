import { useDispatch, useSelector } from "react-redux";
import { openSideBar, closeSideBar } from "../../store/slices/sideBarSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-1 bg-gray-100 rounded-lg">
      <div className="w-full h-full py-1 relative">
        <input
          className="w-full border-0 bg-transparent sm:placeholder:text-sm placeholder:font-semibold placeholder:text-gray-500"
          type="text"
          placeholder="Search"
          onFocus={() => {
            dispatch(openSideBar());
          }}
          onBlur={() => {
            dispatch(closeSideBar());
          }}
        />
        <div className="flex justify-center items-center absolute right-0 top-0 bottom-0">
          <SearchIcon className="hidden sm:inline" />
          <BurgerMenu className="inline sm:hidden" />
        </div>
      </div>
    </div>
  );
};

const SearchIcon = (props) => {
  return (
    <img
      src="src/assets/icons/search.svg"
      alt="search"
      className={`${props.className} w-9/12 h-9/12`}
    />
  );
};

const BurgerMenu = (props) => {
  const toggle = () => {
    // toggle the mobile menu
  };

  return (
    <img
      onClick={toggle}
      src="src/assets/icons/burger.svg"
      alt="search"
      className={`${props.className} w-9/12 h-9/12`}
    />
  );
};

export default SearchBar;
