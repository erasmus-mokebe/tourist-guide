import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocations } from "../store/slices/locationsSlice";

const api = "http://localhost:8080";

export const DataFetcher = ({ children }) => {
  const dispatch = useDispatch();

  const calcRating = (e) => ({
    ...e,
    ratingScore:
      e.ratings.reduce((prev, curr) => prev + curr.rating, 0) /
      e.ratings.length,
  });

  useEffect(() => {
    fetch(`${api}/locations`)
      .then((data) => data.json())
      .then((locations) => dispatch(setLocations(locations.map(calcRating))))
      .catch((e) => console.error(e));
  }, []);

  return children;
};
