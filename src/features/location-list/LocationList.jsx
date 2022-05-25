import { LocationCard } from "./LocationCard";
import { useSelector } from "react-redux";

export const LocationList = () => {
  const locations = useSelector((state) => state.locations.locations);
  const filters = useSelector((state) => state.locations.filters);

  const regex = new RegExp(filters.search, "i");

  const locationsSorted = locations
    .map((location) => ({
      ...location,
      fitness:
        location.rating.score / 5 +
        (location.name.match(regex) ? 5 : 0) +
        (location.place.street.match(regex) ? 3 : 0) +
        (location.description.match(regex) ? 2 : 0) +
        (location.type.match(regex) ? 1 : 0),
    }))
    .filter((location) => {
      return filters.name || location.fitness > 1;
    })
    .sort((a, b) => {
      return a.fitness - b.fitness;
    });

  return (
    <div className="w-full p-5" style={{ direction: "ltr" }}>
      {locationsSorted?.map((location) => (
        <LocationCard key={location.id} location={location}></LocationCard>
      ))}
    </div>
  );
};
