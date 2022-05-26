import { Map } from "../features/map/Map";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openSideBar } from "../store/slices/sideBarSlice";
import { useParams } from "react-router-dom";

export const Browser = (props) => {
  const dispatch = useDispatch();
  const { locationId } = useParams();

  useEffect(() => {
    console.log(props.children);
    if (locationId) dispatch(openSideBar());
  }, [locationId]);

  return (
    <div className="flex-1 flex">
      {props.children}
      <Map />
    </div>
  );
};
