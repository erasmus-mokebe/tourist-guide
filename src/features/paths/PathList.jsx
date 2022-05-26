import { useDispatch, useSelector } from "react-redux";
import PathDetails from "./PathDetails";
import PathButton from "./PathButton";
import PathDescription from "./PathDescription";
import { setVisited } from "../../store/slices/locationsSlice";

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
  const dispatch = useDispatch();
  const toggleVisited = (id, visited) => {
    dispatch(setVisited({ id, visited }));
  };
  return (
    <div className="px-8">
      <PathButton />
      <PathDescription descriptions={description[0]} locations={locations} />
      {locations.map((location) => (
        <PathDetails
          key={location.id}
          onToggle={() => toggleVisited(location.id, !location.visited)}
          location={location}
        />
      ))}
    </div>
  );
};

export default PathList;
