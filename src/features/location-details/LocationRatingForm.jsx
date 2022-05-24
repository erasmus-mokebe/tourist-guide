import { useState } from "react";

import { StarsInput } from "./StarsInput";

export const LocationRatingForm = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <h3 className="tesxt-lg font-semibold my-5">Share your experiences</h3>
      <div className="flex">
        <StarsInput rating={rating} onChange={setRating} />
      </div>
    </div>
  );
};
