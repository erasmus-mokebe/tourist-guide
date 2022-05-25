import { LocationRatingList } from "./LocationRatingList";
import { LocationRatingForm } from "./LocationRatingForm";

import RatingStarFullIcon from "../../assets/icons/star_full.svg";
import EarthIcon from "../../assets/icons/earth.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import HomeIcon from "../../assets/icons/home.svg";
import PlaceIcon from "../../assets/img/places/hotel.jpg";

const numberOfRatings = 3;
const webPage = "bluecottage.gr";
const phone = "+42 83 72 482";
const address = "Upper St. 17, Makedonia, Greece";

export const LocationDetails = () => (
  <div>
    <img src={PlaceIcon} alt={"alt"} className="w-full mb-6" />
    <div className="px-6">
      <div className="flex justify-between">
        <h3 className="tesxt-lg font-semibold">{"Blue cottage"}</h3>
        <div className="flex font-semibold">
          <img src={RatingStarFullIcon} alt="rating star" />
          <span className="pl-3 pr-1">{/*rating*/ 4.8}</span>
          <span className="text-neutral-600 w-20">
            ({numberOfRatings}
            {numberOfRatings == 1 ? " rating)" : " ratings)"}
          </span>
        </div>
      </div>
      <p className="text-neutral-600 my-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id sapien
        ligula. Nam vestibulum orci id nisl pharetra tincidunt. Aenean massa
        velit, aliquet nec interdum sed.
      </p>
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
          <span>{address}</span>
        </div>
      </div>
      <h3 className="tesxt-lg font-semibold my-5">Ratings</h3>
      <LocationRatingList />
      <LocationRatingForm />
    </div>
  </div>
);
