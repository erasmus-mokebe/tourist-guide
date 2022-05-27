import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RatingStarFullIcon from "../../assets/icons/star_full.svg";
import { setPoint } from "../../store/slices/currentPointSlice";

export const LocationCard = ({ location }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className="text-sm mb-8 cursor-pointer"
      onClick={() => {
        dispatch(
          setPoint({
            lat: location.place.coords[0],
            lng: location.place.coords[1],
          })
        );
        navigate(`/${location.id}`);
      }}
    >
      <img
        src={location.photoUrl}
        className="w-full h-64 object-cover overflow-hidden pb-4"
      />
      <div className="flex justify-between items-center">
        <h3 className="text-lg">{location.name}</h3>
        <div className="flex">
          <img src={RatingStarFullIcon} />
          <span>{location.ratingScore.toFixed(2)}</span>
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
