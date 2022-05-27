import { useDispatch, useSelector } from "react-redux";
import PathDetails from "./PathDetails";
import PathButton from "./PathButton";
import PathDescription from "./PathDescription";
import { setVisited } from "../../store/slices/locationsSlice";
import { Navigate, useParams } from "react-router-dom";
import { useMemo } from "react";

const PathList = () => {
  const dispatch = useDispatch();

  const { paths } = useSelector((state) => state.paths);
  const { pathId } = useParams();
  const path = paths.find((path) => path.id === pathId);

  if (!path) {
    return <Navigate to="/paths" />;
  }

  const { locations: allLocations } = useSelector((state) => state.locations);
  const matchedLocations = useMemo(() => {
    return allLocations.filter((location) =>
      path.locations.includes(location.id)
    );
  }, [allLocations, path.locations]);

  const toggleVisited = (id, visited) => {
    dispatch(setVisited({ id, visited }));
  };

  return (
    <div className="px-8">
      <PathButton />
      <PathDescription
        name={path.name}
        description={path.description}
        locations={matchedLocations}
      />
      {matchedLocations.map((location) => (
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
