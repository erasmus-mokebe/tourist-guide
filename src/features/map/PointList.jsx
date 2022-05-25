import { Marker } from "react-leaflet";
import { divIcon } from "leaflet";
import { useSelector } from "react-redux";
import { renderToString } from "react-dom/server";
import { ReactElement } from "react";

import RestaurantIcon from "../../assets/icons/cutlery.svg";
import MuseumIcon from "../../assets/icons/museum.svg";
import ParkingIcon from "../../assets/icons/parking.svg";
import MapMarker from "../../assets/icons/map-marker.svg";

const GetIconImage = (type) => {
	switch (type) {
		case "parking":
			return ParkingIcon;
		case "restaurant":
			return RestaurantIcon;
		case "museum":
			return MuseumIcon;
		default:
			return null;
	}
};

const GetIconColor = (type) => {
	switch (type) {
		case "parking":
			return "#00bcd4";
		case "restaurant":
			return "#005e54";
		case "museum":
			return "#c2bb00";
		default:
			return "#ff9800";
	}
};

const GetIcon = (type) => {
	const icon = GetIconImage(type);
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
						backgroundColor: GetIconColor(type),
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

export const PointList = ({ onMarkerClick }) => {
	const locations = useSelector((state) => state.locations.locations);
	const locationsFilters = useSelector((state) => state.locations.filters);

	if (!locations) return <></>;

	return locations.map(
		({ id, place, type }) =>
			(locationsFilters.type === "all" || locationsFilters.type === type) && (
				<Marker
					key={id}
					position={place.coords}
					eventHandlers={{ click: () => onMarkerClick(id) }}
					icon={renderMarker(GetIcon(type))}
				/>
			)
	);
};
