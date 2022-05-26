import { Marker, useMapEvents } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { divIcon } from "leaflet";
import { renderToString } from "react-dom/server";
import { getIconImage, getIconColor } from "./util";
import MapMarker from "../../assets/icons/map-marker.svg";
import { openSideBar } from "../../store/slices/sideBarSlice";

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
              className="w-full h-full"
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
  const locations = useSelector(state => state.locations.locations);
  const locationsFilters = useSelector(state => state.locations.filters);

  const navigate = useNavigate()

  const dispatch = useDispatch();


  const map = useMapEvents({});

  const markerClickHandler = (id, point) => {
    navigate(`/${id}`);

    console.log(point);

    const cords = {
      lat: point.latlng.lat,
      lng: point.latlng.lng  + 0.001
    };

    map.flyTo(cords, 18, {
      animate: true,
    });

    dispatch(openSideBar());
  }


  if (!locations) return <></>;

  return locations.map(
    ({ id, place, type }) =>
      (locationsFilters.type === 'all' || locationsFilters.type === type) && (
        <Marker
          key={id}
          position={place.coords}
          icon={renderMarker(GetIcon(type))}
          eventHandlers={{ click: markerClickHandler.bind(null, id) }}
        />
      )
  );
};
