import lagoon from "../../assets/img/paths/lagoon.jpg";
import fullStar from "../../assets/icons/star_full.svg";
import pin from "../../assets/icons/pin.svg";

const PathDetails = ({ location, onToggle }) => {
  return (
    <div className="py-[8%]">
      <img src={lagoon} />
      <div className="flex justify-between items-center my-2">
        <h3 className="font-semibold text-xl">{location?.name}</h3>
        <div className="flex">
          <img src={fullStar} />
          <span className="font-bold text-base ml-2">
            {location?.rating?.score}
          </span>
        </div>
      </div>
      <p className="text-gray-500 mb-4 font-medium text-sm">
        {location?.type}
        <span className="mx-2">·</span>
        {location?.place.street}
      </p>
      {location.visited ? (
        <button
          className="bg-green-100 rounded-lg w-full text-green-600 font-medium p-2"
          onClick={onToggle}
        >
          Mark not visited
        </button>
      ) : (
        <div className="flex w-full justify-between ">
          <button
            className="bg-[#24A229]  text-white p-2 rounded-lg w-9/12"
            onClick={onToggle}
          >
            Mark visited
          </button>
          <button
            className={`bg-[#24A229] rounded-lg w-[22%] relative ${
              !location.visited ? "animate-grow" : ""
            }`}
          >
            <img
              src={pin}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default PathDetails;
