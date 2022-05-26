import FullStar from "../../assets/icons/star_full.svg";
import EmptyStar from "../../assets/icons/star_empty.svg";

export const DisplayStars = ({ rating }) => {
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? FullStar : EmptyStar}
          alt={i <= rating ? "Full Star" : "Empty Star"}
        ></img>
      );
    }

    return stars;
  };

  return renderStars(rating);
};
