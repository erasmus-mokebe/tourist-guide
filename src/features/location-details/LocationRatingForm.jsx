import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addComment } from "../../store/slices/locationsSlice";

import { StarsInput } from "./StarsInput";

export const LocationRatingForm = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const { locationId } = useParams();

  const sendRating = (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Invalid rating");
      return;
    }

    const payload = {
      rating,
      content,
      author: {
        nickname: user.nickname,
        picture: user.picture,
      },
    };

    fetch(`http://localhost:8080/locations/${locationId}/ratings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((data) => data.json())
      .then((body) => dispatch(addComment({ id: locationId, rating: body })))
      .catch((err) => console.error(err));

    setContent("");
  };

  return isAuthenticated ? (
    <div>
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
      </form>
    </div>
  ) : (
    <div>
      <p>You need to be logged in!</p>
      <button
        onClick={loginWithRedirect}
        className="bg-blue-500 py-1 px-3 text-white rounded-lg"
      >
        Log in
      </button>
    </div>
  );
};
