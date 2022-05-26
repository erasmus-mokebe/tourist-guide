import RestaurantIcon from "../../assets/icons/cutlery.svg";
import MuseumIcon from "../../assets/icons/museum.svg";
import ParkingIcon from "../../assets/icons/parking.svg";
import ParkIcon from "../../assets/icons/tree.svg";
import BeachIcon from "../../assets/icons/umbrella.svg";

export const getIconImage = (type) => {
  switch (type) {
    case "parking":
      return ParkingIcon;
    case "restaurant":
      return RestaurantIcon;
    case "museum":
      return MuseumIcon;
    case "park":
      return ParkIcon;
    case "beach":
      return BeachIcon;
    default:
      return null;
  }
};

export const getIconColor = (type) => {
  switch (type) {
    case "parking":
      return "#003547";
    case "restaurant":
      return "#005E54";
    case "museum":
      return "#C2BB00";
    case "park":
      return "#E1523D";
    case "beach":
      return "#ED8B16";
    default:
      return "#ff9800";
  }
};
