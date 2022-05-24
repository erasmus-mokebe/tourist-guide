import { useSelector } from "react-redux";
import PathDetails from "./PathDetails";
import left from "../../assets/icons/left.svg";

const PathList = () => {
  const locations = useSelector((state) => state.locations).locations;

  return (
    <>
      <button className="bg-slate-200 rounded-lg absolute top-4 lef-4">
        <img src={left} />
        <span>Return to paths</span>
      </button>
      <PathDetails location={locations[0]} />
    </>
  );
};

export default PathList;
