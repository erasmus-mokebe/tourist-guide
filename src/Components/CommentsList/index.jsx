import SideComment from "../SideComment";
import { useState } from "react";
import { render } from "react-dom";
import faceImg from "../../assets/img/face.jpg";

const comments = [
  {
    id: "1",
    name: "David Sculptur",

    date: "2022-05-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
];

const CommentsList = () => {
  const [showAll, setShowAll] = useState(false);

  const renderComments = (comments) =>
    comments.map(({ id, name, date, opinion }) => (
      <SideComment
        key={id}
        img={faceImg}
        name={name}
        date={date}
        opinion={opinion}
      />
    ));

  return (
    <>
      {showAll
        ? renderComments(comments)
        : renderComments(comments.slice(0, 3))}
      {comments.length > 3 && (
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

export default CommentsList;
