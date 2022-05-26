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
  const filters = useSelector((state) => state.locations.filters);
  const { pathId } = useParams();
  const path = paths.find((path) => path.id === pathId);

  const regex = new RegExp(filters.search, "i");

  if (!path) {
    return <Navigate to="/paths" />;
  }

  const { locations: allLocations } = useSelector((state) => state.locations);
  const matchedLocations = allLocations.filter((location) =>
    path.locations.includes(location.id)
  );

  const searchedLocations = matchedLocations
    .map((location) => ({
      ...location,
      fitness:
        (location.name.match(regex) ? 5 : 0) +
        (location.place.street.match(regex) ? 3 : 0) +
        (location.description.match(regex) ? 2 : 0) +
        (location.type.match(regex) ? 1 : 0),
    }))
    .filter((location) => {
      return filters.name || location.fitness > 0;
    });
  console.log(allLocations);
  console.log(matchedLocations);

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
      {searchedLocations.length > 0 &&
        searchedLocations.map((location) => (
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
