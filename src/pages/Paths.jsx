import { PathCard } from "../features/paths/PathCard";
import PathImage from "../assets/img/paths/beach.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaths } from "../store/slices/pathSlice";

const Paths = () => {
  const dispatch = useDispatch();
  const paths = useSelector((state) => state.paths.paths);

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8080/paths");
      const paths = await data.json();
      dispatch(setPaths(paths));
    })();
  }, []);

  return (
    <main className="grid grid-cols-3 gap-12 px-12 pt-10 w-full overflow-y-auto">
      {(paths || []).map((path) => (
        <PathCard path={path} key={path.id} />
      ))}
    </main>
  );
};

export default Paths;
