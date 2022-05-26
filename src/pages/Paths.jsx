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

  console.log(paths)

  return (
    <main className="grid grid-cols-3 gap-12 mx-12 mt-10">
      {(paths || []).map((path) => (
        <PathCard
          key={path.id}
          img={path.img}
          name={path.name}
          description={path.description}
          // TODO: Add missing images
          // TODO: Add progressbar
        />
      ))}
    </main>
  );
};

export default Paths;
