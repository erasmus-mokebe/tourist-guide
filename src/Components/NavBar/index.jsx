import { useSelector } from "react-redux";
import SearchBar from "../SearchBar";
import Icons from "../Icons";
import Button from "../Button";
import VerticalSeparator from "../VerticalSeparator";

const NavBar = () => {
  const sideBarOpened = useSelector((state) => state.sideBar.opened);

  return (
    <nav className="relative flex-1 h-full box-border max-w-full border-box px-2 py-3">
      <div className="flex flex-col sm:flex-row items-center gap-6 relative w-full h-full">
        <div className="w-full sm:w-64">
          <SearchBar />
        </div>
        <Icons
          className={`${sideBarOpened ? "hidden" : ""} sm:flex items-center`}
        />
        <VerticalSeparator className="hidden sm:block" />
        <span className="hidden sm:inline text-gray-500 font-semibold text-sm cursor-pointer">
          More filters
        </span>
        <div className="hidden sm:block absolute right-0 top-0 bottom-0">
          <Button>
            <span className="flex-1 text-sm whitespace-nowrap">
              Explore Thessaloniki
            </span>
            <img
              className="w-full h-full"
              src="src/assets/icons/right-arrow.svg"
              alt="explore thessaloniki"
            />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
