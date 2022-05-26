import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PathsNavigation } from "../features/navigation/PathsNavigation";
import { PathCard } from "../features/paths/PathCard";
import { setPaths } from "../store/slices/pathSlice";

export const Paths = () => {
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
    <>
      <PathsNavigation />
      <main className="grid grid-cols-3 gap-12 px-12 pt-10 w-full overflow-y-auto">
        {(paths || []).map((path) => (
          <PathCard path={path} key={path.id} />
        ))}
      </main>
    </>
  );
};
