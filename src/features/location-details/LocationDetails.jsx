import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { LocationRatingList } from "./LocationRatingList";
import { LocationRatingForm } from "./LocationRatingForm";
import { DisplayStars } from "./DisplayStars";

import EarthIcon from "../../assets/icons/earth.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import HomeIcon from "../../assets/icons/home.svg";

const webPage = "bluecottage.gr";
const phone = "+42 83 72 482";
const address = "Upper St. 17, Makedonia, Greece";

export const LocationDetails = () => {
  const { locationId } = useParams();
  const locations = useSelector((state) => state.locations.locations);
  const location = locations.find((el) => el.id == locationId);

  useEffect(() => console.log(location), [locations]);

  return (
    location && (
      <div>
        <img
          src={location.photoUrl}
          alt={"alt"}
          className="w-full h-96 object-cover mb-6"
        />
        <div className="px-6">
          <div className="w-full">
            <h3 className="tesxt-lg font-semibold">{location.name}</h3>
            <span className="text-sm text-slate-400">{location.type}</span>
            <div className="flex font-semibold">
              <DisplayStars rating={Math.round(location.ratingScore)} />
              <span className="pl-3 pr-1">{location.ratingScore}</span>
              <span className="text-neutral-600 w-20">
                ({location.ratings.length}
                {location.ratings.length == 1 ? " rating)" : " ratings)"}
              </span>
            </div>
          </div>
          <p className="text-neutral-600 my-8">{location.description}</p>
          <div>
            <div className="flex">
              <img src={EarthIcon} alt="earth icon" className="mr-5" />
              <a
                href={"https://" + webPage}
                className="text-color-black hover:decoration-solid"
              >
                {webPage}
              </a>
            </div>
            <div className="flex my-1">
              <img src={PhoneIcon} alt="phone icon" className="mr-5" />
              <span>{phone}</span>
            </div>
            <div className="flex">
              <img src={HomeIcon} alt="house icon" className="mr-5" />
              <span>{location.place.street}</span>
            </div>
          </div>
          <h3 className="tesxt-lg font-semibold my-5">Ratings</h3>
          <LocationRatingList ratings={location.ratings} />
          <h3 className="text-lg font-semibold my-5">Share your experiences</h3>
          <LocationRatingForm />
        </div>
      </div>
    )
  );
};
