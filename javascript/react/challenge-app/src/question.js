import React, { forwardRef } from "react";

const Question = forwardRef(({ question, index, reduceItem }) => {
  return (
    <li key={index}>
      {question.isopen ? (
        <>
          <div className="question">
            <h3>{question.title}</h3>
            <button
              className="minus"
              onClick={() => reduceItem(index)}
            ></button>
          </div>
          <div>{question.body}</div>
        </>
      ) : (
        <>
          <div className="question">
            <h3>{question.title}</h3>

            <button className="plus" onClick={() => reduceItem(index)}></button>
            <div className="hidden-div">{question.body}</div>
          </div>
        </>
      )}
    </li>
  );
});
export default Question;
