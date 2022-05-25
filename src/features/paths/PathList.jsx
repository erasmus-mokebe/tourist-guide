import { useSelector } from "react-redux";
import PathDetails from "./PathDetails";
import PathButton from "./PathButton";
import PathDescription from "./PathDescription";

const description = [
  {
    id: "1",
    name: "Incredible beaches",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const PathList = () => {
  const locations = useSelector((state) => state.locations).locations;

  return (
    <>
      <PathButton />
      <PathDescription descriptions={description[0]} />
      <PathDetails location={locations[0]} />
    </>
  );
};

export default PathList;
