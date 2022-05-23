const SidebarSingle = ({ location }) => {
  return (
    <div className="text-sm mb-8">
      <img
        src="src/assets/img/places/david.jpg"
        className="w-full overflow-hidden pb-4"
      />
      <div className="flex justify-between items-center">
        <h3 className="text-lg">{location.name}</h3>
        <div className="flex">
          <img src="src/assets/icons/star_full.svg" />
          <span>{location.rating.score}</span>
        </div>
      </div>
      <div className="text-gray-500">
        {location.type}
        <span className="mx-4">·</span>
        {location.place.street}
      </div>
    </div>
  );
};

export default SidebarSingle;
