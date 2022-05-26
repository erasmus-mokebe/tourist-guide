import { Link } from "react-router-dom";
import left from "../../assets/icons/left.svg";

const PathButton = () => (
  <div className="my-5 bg-slate-100 rounded-lg px-2 py-1 flex content-center relative w-max">
    <img src={left} className="pt-1.5 pr-2" />
    <span className="text-slate-500 font-semibold">Return to paths</span>
    <Link to="/paths" className="absolute top-0 left-0 w-full h-full"></Link>
  </div>
);
export default PathButton;
