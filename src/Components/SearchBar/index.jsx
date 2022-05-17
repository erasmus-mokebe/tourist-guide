const SearchBar = () => {
  return (
    <div className="bg-gray-300 rounded relative p-2">
      <input className="border-0 bg-transparent" type="text" placeholder="Search" />
      <svg className="absolute right-0"></svg>
    </div>
  );
};

export default SearchBar;