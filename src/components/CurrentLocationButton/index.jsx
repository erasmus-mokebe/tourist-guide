const CurrentLocationButton = () => {
  return (
    <button
      className="flex sm:hidden justify-center items-center absolute right-4 bottom-4 w-16 h-16 bg-green-700 rounded-lg z-40"
      onClick={() => {
        // go to current location on map
      }}
    >
      <img
        src="src/assets/icons/current-location.svg"
        alt="go to your current location"
      />
    </button>
  );
};

export default CurrentLocationButton;
