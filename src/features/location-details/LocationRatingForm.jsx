import { useState } from "react";
import { useParams } from "react-router-dom";

import { StarsInput } from "./StarsInput";

export const LocationRatingForm = () => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const { locationId } = useParams();

  const sendRating = (e) => {
    e.preventDefault();

    console.log({
      rating,
      content,
      author: { nickname: "Adolf Hitler", picture: "" },
    });

    fetch(`http://localhost:8080/locations/${locationId}/ratings`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
        content,
        author: {
          nickname: "Adolf Hitler",
          picture:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d2/d2f9c2f26c27684a80db6e5505811df1cb2c8471_full.jpg",
        },
      }),
    });
    setContent("");
  };

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
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          className="w-full bg-[#24A229] text-white text-center rounded-lg p-3 font-semibold mb-4 cursor-pointer"
          onClick={sendRating}
        >
          Send opinion
        </button>
        {/* <input type="hidden" name="rating" value={rating} /> */}
      </form>
    </div>
  );
};
