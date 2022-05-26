import { Link } from "react-router-dom";

export const PathCard = ({ path }) => {
  // TODO: Add missing images
  // TODO: Add progressbar

  return (
    <div className="h-max">
      <img src={path.img} className="w-full h-80" />
      <div className="flex flex-col gap-4 mt-5">
        <h3 className="font-medium">{path.name}</h3>
        <p className="text-gray-500">{path.description}</p>
        <Link
          to={`/paths/${path.id}`}
          className="bg-[rgba(36,162,41,0.16)] text-[#24A229] p-2 text-center font-medium rounded-lg"
        >
          Select
        </Link>
      </div>
    </div>
  );
};
