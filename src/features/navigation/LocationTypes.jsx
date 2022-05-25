import { useDispatch, useSelector } from "react-redux";
import { filterType, clearTypeFilter } from "../../store/slices/locationsSlice";

import UmbrellaIcon from "../../assets/icons/umbrella.svg";
import WeedIcon from "../../assets/icons/weed.svg";
import TreeIcon from "../../assets/icons/tree.svg";
import CutleryIcon from "../../assets/icons/cutlery.svg";
import ParkingIcon from "../../assets/icons/parking.svg";

const LocationType = (props) => {
  const currentTypeFilter = useSelector(
    (state) => state.locations.filters.type
  );

  const dispatch = useDispatch();

  console.log(props.img);

  return (
    <div
      className="flex justify-center items-center gap-2 lg:w-8 h-8 border-box py-1 px-4 lg:p-1 rounded-full cursor-pointer"
      style={{
        backgroundColor:
          currentTypeFilter === props.type ? "white" : props.color,
        border: `2px solid ${props.color}`,
      }}
      onClick={() => {
        if (currentTypeFilter === props.type) {
          dispatch(clearTypeFilter());
        } else {
          dispatch(filterType(props.type));
        }
      }}
    >
      <div
        className="inline-block min-h-full h-full aspect-square"
        style={{
          maskImage: `url("${props.img}")`,
          WebkitMaskImage: `url("${props.img}")`,
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
            backgroundColor:
              currentTypeFilter === props.type ? props.color : "white",
          }}
        />
      </div>
      <span
        className="lg:hidden whitespace-nowrap"
        style={{
          color: currentTypeFilter === props.type ? props.color : "white",
        }}
      >
        {props.alt}
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
      <LocationType
        color="#ED8B16"
        img={UmbrellaIcon}
        alt="rest in piss"
        type="beach"
      />
      <LocationType color="#C2BB00" img={WeedIcon} alt="SPA" type="spa" />
      <LocationType color="#E1523D" img={TreeIcon} alt="greenery" type="park" />
      <LocationType
        color="#005E54"
        img={CutleryIcon}
        alt="Restaurants"
        type="restaurant"
      />
      <LocationType
        color="#003547"
        img={ParkingIcon}
        alt="Parking"
        type="parking"
      />
    </div>
  );
};
