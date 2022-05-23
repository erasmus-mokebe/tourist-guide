import SideComment from "../SideComment";
import { useState } from "react";
import { render } from "react-dom";

const comments = [
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-05-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-04-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-04-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-04-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-04-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-04-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-04-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-04-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-04-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-04-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
  {
    id: "1",
    name: "David Sculptur",
    img: "src/assets/img/face.jpg",
    date: "2022-04-20T09:55:35.785Z",
    opinion:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
  },
];

const CommentsList = () => {
  const [showAll, setShowAll] = useState(false);

  const renderComments = (comments) =>
    comments.map(({ id, img, name, date, opinion }) => (
      <SideComment
        key={id}
        img={img}
        name={name}
        date={date}
        opinion={opinion}
      />
    ));

  return (
    <>
      {showAll
        ? renderComments(comments)
        : renderComments(comments.slice(0, 5))}

      <button
        className="text-sm text-slate-400"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "See less" : "Show more"}
      </button>
    </>
  );
};

export default CommentsList;
