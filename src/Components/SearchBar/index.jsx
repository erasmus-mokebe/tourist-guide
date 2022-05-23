import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { openSideBar } from "../../store/slices/sideBarSlice";
import Logo from "../Logo";
import { updatePoint } from "../../store/slices/currentPointSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const sideBarOpened = useSelector((state) => state.sideBar.opened);
  const input = useRef();

  const clearInput = () => {
    input.current.value = "";
  };

  return (
    <div className="bg-gray-100 rounded-lg">
      <div className="flex items-center gap-5 w-full h-full relative">
          <Logo className="inline-block w-6 h-6" />
        <input
          className="py-2 outline-none flex-1 border-0 bg-transparent sm:placeholder:text-sm placeholder:font-semibold placeholder:text-gray-500"
          type="text"
          placeholder="Search"
          ref={input}
          onFocus={() => {
            dispatch(updatePoint(null));
            dispatch(openSideBar());
          }}
          // onBlur={() => {
          //   dispatch(closeSideBar());
          // }}
        />
        <div className="flex justify-center items-center absolute right-0 top-0 bottom-0">
          <div className="flex gap-2 items-center">
            {sideBarOpened ? (
              <img
                className="cursor-pointer pr-2 pl-2"
                src="src/assets/icons/x.svg"
                onClick={clearInput}
              />
            ) : (
              <>
                <SearchIcon className="hidden sm:inline pl-2" />
                <BurgerMenu className="inline sm:hidden pl-2" />
              </>
            )}
          </div>
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
      className={`${props.className} w-9/12 h-9/12 pl-2`}
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
      className={`${props.className} w-9/12 h-9/12 pl-2`}
    />
  );
};

export default SearchBar;
