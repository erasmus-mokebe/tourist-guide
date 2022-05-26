import FullStar from "../../assets/icons/star_full.svg";
import EmptyStar from "../../assets/icons/star_empty.svg";

export const StarsInput = ({ rating, onChange }) => {
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          src={i <= rating ? FullStar : EmptyStar}
          alt={i <= rating ? "Full Star" : "Empty Star"}
          onClick={() => onChange(i)}
          className="cursor-pointer"
          key={i}
        />
      );
    }

    return stars;
  };

  return renderStars(rating);
};
