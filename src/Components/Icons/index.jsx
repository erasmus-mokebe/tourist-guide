import Icon from "../Icon";

const Icons = (props) => (
  <div className={`${props.className} w-full min-h-[3rem] flex items-center`}>
    <div className="overflow-x-scroll sm:overflow-x-auto h-full w-full flex gap-3">
      <Icon
        color="#ED8B16"
        img="src/assets/icons/umbrella.svg"
        alt="rest in piss"
      />
      <Icon color="#C2BB00" img="src/assets/icons/weed.svg" alt="SPA" />
      <Icon color="#E1523D" img="src/assets/icons/tree.svg" alt="greenery" />
      <Icon
        color="#005E54"
        img="src/assets/icons/cutlery.svg"
        alt="Restaurants"
      />
      <Icon color="#003547" img="src/assets/icons/parking.svg" alt="Parking" />
      <img
        className="hidden sm:inline"
        src="src/assets/icons/triple-dots.svg"
        alt="see more"
      />
    </div>
  </div>
);

export default Icons;
