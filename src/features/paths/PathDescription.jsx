import ProgressCircle from "./ProgressCricle.jsx";
import { useState } from "react";

const PathDescription = ({ description, name, locations }) => {
  const [showAll, setShowAll] = useState(false);

  const visitedCount = locations.reduce(
    (acc, location) => acc + (location.visited ? 1 : 0),
    0
  );
  const completed = Math.round((visitedCount / locations.length) * 100);

  const paragraph = description.split(".")[0] + "...";

  return (
    <div className="mt-4">
      <h3 className="font-semibold text-lg">{name}</h3>
      <div className="flex content-center my-3">
        <div className="pt-1 pr-1">
          <ProgressCircle progress={completed} />
        </div>
        <span className="font-medium font-sm">{completed}% finished</span>
      </div>

      <p className="text-sm text-slate-400">
        {showAll ? description : paragraph}
        <button
          className="text-green-500 pl-1"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "See less" : "Show more"}
        </button>
      </p>
    </div>
  );
};

export default PathDescription;
