import React from "react";
import Picture from "./Picture";

function Card({ cardContent }) {
  return (
    <>
      <Picture srcPath={cardContent.img} />
      <h1>{cardContent.title}</h1>
      <p>{cardContent.body}</p>
    </>
  );
}

export default Card;
