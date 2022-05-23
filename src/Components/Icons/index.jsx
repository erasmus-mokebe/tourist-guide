import Icon from "../Icon";
import umbrella from "../../assets/icons/umbrella.svg";
import weed from "../../assets/icons/weed.svg";
import tree from "../../assets/icons/tree.svg";
import cutlery from "../../assets/icons/cutlery.svg";
import parking from "../../assets/icons/parking.svg";
import tripleDots from "../../assets/icons/triple-dots.svg";

const Icons = () => (
  <div className="flex gap-3">
    <Icon color="#ED8B16" img={umbrella} alt="rest in piss" />
    <Icon color="#C2BB00" img={weed} alt="SPA" />
    <Icon color="#E1523D" img={tree} alt="greenery" />
    <Icon color="#005E54" img={cutlery} alt="Restaurants" />
    <Icon color="#003547" img={parking} alt="Parking" />
    <img src={tripleDots} alt="see more" />
  </div>
);

export default Icons;
