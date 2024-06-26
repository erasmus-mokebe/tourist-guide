import { formatDistance } from "date-fns";
import { DisplayStars } from "./DisplayStars";

export const LocationRating = ({ img, name, date, opinion, rating }) => (
  <section className="my-7">
    <div className="flex">
      <img className="w-10 mr-2.5 mb-1" src={img} />
      <div>
        <div className="flex justify-start">
          <h5 className="text-sm inline mr-2 font-semibold">{name}</h5>
          <span className="text-slate-400 text-xs">
            {formatDistance(new Date(date), new Date(), { addSuffix: true })}
          </span>
        </div>
        <div className="flex m-0.5">
          <DisplayStars rating={rating} />
        </div>
      </div>
    </div>
    <p className="text-sm">{opinion}</p>
  </section>
);
