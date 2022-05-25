import { useDispatch, useSelector } from "react-redux";
import { filterType, clearTypeFilter } from "../../store/slices/locationsSlice";
import { getIconImage, getIconColor } from "../map/util";

const LocationType = ({ type, alt }) => {
  const currentTypeFilter = useSelector(
    (state) => state.locations.filters.type
  );

  const dispatch = useDispatch();

  const img = getIconImage(type);
  const color = getIconColor(type);

  return (
    <div
      className="flex justify-center items-center gap-2 lg:w-8 h-8 border-box py-1 px-4 lg:p-1 rounded-full cursor-pointer"
      style={{
        backgroundColor: currentTypeFilter === type ? "white" : color,
        border: `2px solid ${color}`,
      }}
      onClick={() => {
        if (currentTypeFilter === type) {
          dispatch(clearTypeFilter());
        } else {
          dispatch(filterType(type));
        }
      }}
    >
      <div
        className="inline-block min-h-full h-full aspect-square"
        style={{
          maskImage: `url("${img}")`,
          WebkitMaskImage: `url("${img}")`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundColor: currentTypeFilter === type ? color : "white",
          }}
        />
      </div>
      <span
        className="lg:hidden whitespace-nowrap"
        style={{
          color: currentTypeFilter === type ? color : "white",
        }}
      >
        {alt}
      </span>
    </div>
  );
};

export const LocationTypes = (props) => {
  const sideBarOpen = useSelector((state) => state.sideBar.opened);

  return (
    <div
      className={`${sideBarOpen ? "hidden" : "flex"} ${
        props.className ? props.className : ""
      } px-8 lg:p-0 h-full min-h-[3rem] lg:flex gap-3 items-center overflow-x-scroll lg:overflow-x-auto`}
    >
      <LocationType alt="rest in piss" type="beach" />
      <LocationType alt="Museums" type="museum" />
      <LocationType alt="greenery" type="park" />
      <LocationType alt="Restaurants" type="restaurant" />
      <LocationType alt="Parking" type="parking" />
    </div>
  );
};
