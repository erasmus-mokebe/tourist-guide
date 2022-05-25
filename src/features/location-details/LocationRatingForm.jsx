import { useState } from "react";

import { StarsInput } from "./StarsInput";

export const LocationRatingForm = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <h3 className="text-lg font-semibold my-5">Share your experiences</h3>
      <h4 className="font-semibold">Your rating:</h4>
      <div className="flex mb-4">
        <StarsInput rating={rating} onChange={setRating} />
      </div>
      <h4 className="font-semibold">Your opinion:</h4>
      <form>
        <textarea
          className="textarea-bigger bg-neutral-200 h-52 resize-none rounded-lg p-4 mt-1 mb-2"
          name="opinion"
        ></textarea>
        <input
          type="submit"
          className="w-full bg-[#24A229] text-white text-center rounded-lg p-3 font-semibold mb-4 cursor-pointer"
          name="submit"
          value="Send opinion"
        />
        <input type="hidden" name="rating" value={rating} />
      </form>
    </div>
  );
};
