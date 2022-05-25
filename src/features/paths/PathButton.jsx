import left from "../../assets/icons/left.svg";

const PathButton = () => (
  <div className="px-[8%] py-1 mt-5">
    <button className="bg-slate-100 rounded-lg top-4  px-2 py-1 flex  content-center">
      <img src={left} className="pt-1.5 pr-2" />
      <span className="text-slate-500 font-semibold">Return to paths</span>
    </button>
  </div>
);
export default PathButton;
