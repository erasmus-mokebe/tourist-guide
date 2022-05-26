import { Link } from "react-router-dom";
import RightArrowIcon from "../../assets/icons/right-arrow.svg";

export const PathCard = ({ path }) => {
  // TODO: Add missing images
  // TODO: Add progressbar

  return (
    <div className="bg-stone-100 rounded-lg">
      <img src={path.img} className="w-full" />
      <h3 className="my-8 mx-8 font-medium">{path.name}</h3>
      <p className="mx-8 my-5">{path.description}</p>
      <div className="my-10 mx-10">
        <Link
          to={`/paths/${path.id}`}
          className="flex gap-10 px-5 py-3 h-full justify-between bg-[#24A229] rounded-lg text-white w-full"
        >
          <span className="whitespace-nowrap m-0 ">Start this path</span>
          <img src={RightArrowIcon} alt="" />
        </Link>
      </div>
    </div>
  );
};
