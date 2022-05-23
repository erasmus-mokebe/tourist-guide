import search from "../../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="px-4 py-1 bg-gray-100 rounded-lg">
      <div className="w-full h-full py-1 relative">
        <input
          className="border-0 bg-transparent placeholder:text-sm placeholder:font-semibold placeholder:text-gray-500"
          type="text"
          placeholder="Search"
        />
        <div className="flex justify-center items-center absolute right-0 top-0 bottom-0">
          <img src={search} alt="search" className="w-9/12 h-9/12"></img>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
