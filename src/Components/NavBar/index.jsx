import SearchBar from "../SearchBar";
import Icons from "../Icons";
import Button from "../Button";

const NavBar = () => {
  return (
    <nav className="flex flex-1 justify-between h-full px-2 py-3">
      <SearchBar />
      <Icons />
      <span>More filters</span>
      <Button>
        <span>Explore Thessaloniki</span>
        <svg></svg>
      </Button>
    </nav>
  );
};

export default NavBar;
