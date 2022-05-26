import { Map } from "../features/map/Map";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openSideBar } from "../store/slices/sideBarSlice";
import { useParams } from "react-router-dom";
import { Navigation } from "../features/navigation/Navigation";

export const Browser = (props) => {
  const dispatch = useDispatch();
  const { locationId } = useParams();

  useEffect(() => {
    console.log(props.children);
    if (locationId) dispatch(openSideBar());
  }, [locationId]);

  return (
    <>
      <Navigation />

      <main className="flex-1 flex h-full overflow-y-hidden">
        <div className="flex-1 flex">
          {props.children}
          <Map />
        </div>
      </main>
    </>
  );
};
