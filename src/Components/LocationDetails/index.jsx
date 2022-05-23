import CommentsList from "../CommentsList";

import starFull from "../../assets/icons/star_full.svg";
import earth from "../../assets/icons/earth.svg";
import phoneImg from "../../assets/icons/phone.svg";
import home from "../../assets/icons/home.svg";
import placeImg from "../../assets/img/places/hotel.jpg";

const numberOfRatings = 3;

const webPage = "bluecottage.gr";
const phone = "+42 83 72 482";
const address = "Upper St. 17, Makedonia, Greece";

const LocationDetails = (props) => (
  <div>
    <img src={placeImg} alt={"alt"} className="w-full mb-6" />
    <div className="px-5">
      <div className="flex justify-between">
        <h3 className="tesxt-lg font-semibold">{"Blue cottage"}</h3>
        <div className="flex font-semibold">
          <img src={starFull} alt="rating star" />
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
          <img src={earth} alt="earth icon" className="mr-5" />
          <a
            href={"https://" + webPage}
            className="text-color-black hover:decoration-solid"
          >
            {webPage}
          </a>
        </div>
        <div className="flex my-1">
          <img src={phoneImg} alt="phone icon" className="mr-5" />
          <span>{phone}</span>
        </div>
        <div className="flex">
          <img src={home} alt="house icon" className="mr-5" />
          <span>{address}</span>
        </div>
      </div>
      <h3 className="tesxt-lg font-semibold my-5">Ratings</h3>
      <CommentsList></CommentsList>
    </div>
  </div>
);

export default LocationDetails;
