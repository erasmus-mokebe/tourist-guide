import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSideBar } from "../../store/slices/sideBarSlice";
import { search } from "../../store/slices/locationsSlice";
import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";

import SearchIcon from "../../assets/icons/search.svg";
import BurgerIcon from "../../assets/icons/burger.svg";
import XIcon from "../../assets/icons/x.svg";

export const SearchBar = (props) => {
  const dispatch = useDispatch();
  const sideBarOpened = useSelector((state) => state.sideBar.opened);
  const input = useRef();
  const navigate = useNavigate();

  const clearInput = () => {
    input.current.value = "";
  };

  return (
    <div className="flex items-center gap-5 rounded-lg w-full lg:w-80 bg-slate-100 h-full relative p-4 lg:py-0">
      <Logo className="inline-block w-4 h-4" />
      <input
        className="flex-1 border-0 bg-transparent lg:placeholder:text-lg placeholder:font-semibold placeholder:text-gray-500 outline-none"
        type="text"
        placeholder="Search"
        ref={input}
        onFocus={() => {
          dispatch(openSideBar());
        }}
        onChange={() => {
          navigate("/");
          dispatch(search(input.current.value));
        }}
      />
      <div className="flex justify-center items-center absolute right-4 top-0 bottom-0">
        <div className="flex items-center">
          {sideBarOpened ? (
            <img className="cursor-pointer" src={XIcon} onClick={clearInput} />
          ) : (
            <>
              <img
                src={SearchIcon}
                alt="search"
                className="w-9/12 h-9/12 hidden lg:inline"
              />
              <img
                src={BurgerIcon}
                alt="search"
                className="w-9/12 h-9/12 inline lg:hidden"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
