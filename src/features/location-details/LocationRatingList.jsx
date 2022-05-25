import { LocationRating } from "./LocationRating";
import { useState } from "react";
import FaceIcon from "../../assets/img/face.jpg";

const comments = [
  {
    id: "1",
    name: "David Sculptur",
    date: "2022-05-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
];

export const LocationRatingList = ({ ratings }) => {
  const [showAll, setShowAll] = useState(false);

  const renderComments = (ratings) =>
    ratings.map(({ id, author, content, createdAt, rating }) => (
      <LocationRating
        key={id}
        img={author.picture}
        name={author.nickname}
        date={createdAt}
        opinion={content}
        rating={rating}
      />
    ));

  return (
    <>
      {showAll ? renderComments(ratings) : renderComments(ratings.slice(0, 3))}
      {ratings.length > 3 && (
        <button
          className="text-sm text-slate-400"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "See less" : "Show more"}
        </button>
      )}
    </>
  );
};
