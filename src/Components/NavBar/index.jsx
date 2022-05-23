import SearchBar from "../SearchBar";
import Icons from "../Icons";
import Button from "../Button";
import VerticalSeparator from "../VerticalSeparator";
import RightArrow from "../../assets/icons/right-arrow.svg";

const NavBar = () => (
  <nav className="flex-1 h-full px-2 py-3 z-100">
    <div className="flex items-center gap-6 relative w-full h-full">
      <div className="w-full sm:w-64">
        <SearchBar />
      </div>
      <Icons />
      <VerticalSeparator />
      <span className="text-gray-500 font-semibold text-sm cursor-pointer">
        More filters
      </span>
      <div className="absolute right-0 top-0 bottom-0">
        <Button>
          <span className="flex-1 text-sm whitespace-nowrap">
            Explore Thessaloniki
          </span>
          <img
            className="w-full h-full"
            src={RightArrow}
            alt="explore thessaloniki"
          />
        </Button>
      </div>
    </div>
  </nav>
);

export default NavBar;
