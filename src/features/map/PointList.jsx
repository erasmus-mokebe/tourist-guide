import { Marker, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { divIcon } from "leaflet";
import { renderToString } from "react-dom/server";
import { getIconImage, getIconColor } from "./util";
import MapMarker from "../../assets/icons/map-marker.svg";
import { openSideBar } from "../../store/slices/sideBarSlice";
import { useEffect } from "react";
import { setPoint } from "../../store/slices/currentPointSlice";

const GetIcon = (type) => {
  const icon = getIconImage(type);
  if (icon) {
    return (
      <div
        className="w-full h-full"
        style={{
          maskImage: `url("${MapMarker}")`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: `url("${MapMarker}")`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundColor: getIconColor(type),
          }}
        >
          <div className="flex justify-center items-center w-full aspect-square p-1">
            <div
              className="w-full h-full mt-0.5"
              style={{
                maskImage: `url("${icon}")`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: `url("${icon}")`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            >
              <div className="w-full h-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const renderMarker = (markerComponent) => {
  return divIcon({
    html: renderToString(markerComponent),
    iconSize: [25, 40],
    iconAnchor: [25, 25],
    className: "",
  });
};

export const PointList = () => {
  const currentPoint = useSelector((state) => state.currentPoint.currentPoint);
  const locations = useSelector((state) => state.locations.locations);
  const locationsFilters = useSelector((state) => state.locations.filters);

  const { pathId } = useParams();
  const paths = useSelector((state) => state.paths.paths);
  const currentPath = paths.find((path) => path.id === pathId);

  useEffect(() => {
    console.log(currentPath);
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const map = useMapEvents({});

  useEffect(() => {
    if (currentPoint) map.flyTo(currentPoint, 18, { animate: true });
  }, [currentPoint]);

  const markerClickHandler = (id, point) => {
    const coords = { lat: point.latlng.lat, lng: point.latlng.lng };

    dispatch(setPoint(coords));
    navigate(`/${id}`);
    dispatch(openSideBar());
  };

  return locations.map(
    ({ id, place, type }) =>
      (locationsFilters.type === "all" || locationsFilters.type === type) &&
      (!currentPath || currentPath.locations.includes(id)) && (
        <Marker
          key={id}
          position={place.coords}
          icon={renderMarker(GetIcon(type))}
          eventHandlers={{ click: (point) => markerClickHandler(id, point) }}
        />
      )
  );
};
