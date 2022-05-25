import { Path } from "leaflet";
import ProgressCircle from "./ProgressCricle.jsx";
import { useState } from "react";
const description = [
  {
    id: "1",
    name: "Incredible beaches",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const PathDescription = ({ descriptions, locations }) => {
  const [showAll, setShowAll] = useState(false);
  const visitedCount = locations.reduce(
    (acc, location) => acc + (location.visited ? 1 : 0),
    0
  );
  const completed = Math.round((visitedCount / locations.length) * 100);
  const paragraph = descriptions.description.split(".")[0] + "...";
  return (
    <div className="mt-4 mx-[8%]">
      <h3 className="font-semibold text-lg">{descriptions?.name}</h3>
      <div className="flex content-center my-3">
        <div className="pt-1 pr-1">
          <ProgressCircle progress={completed} />
        </div>
        <span className="font-medium font-sm">{completed}% finished</span>
      </div>

      <p className="text-sm text-slate-400">
        {showAll ? descriptions?.description : paragraph}
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

// const PathDescriptionRender = ({ id, name, description }) => {
//   const [showAll, setShowAll] = useState("false");

//   const renderDescription = (descriptions) => {
//     descriptions.map(({ id, name, description }) => (
//       <PathDescription key={id} name={name} description={description} />
//     ));
//   };
// };
export default PathDescription;
