import React from "react";
import Question from "./question";
const QuestionsList = ({ question, index, reduceItem }) => {
  return (
    <ul>
      {faq.map((item, index) => (
        <Question
          question={item}
          index={index}
          reduceItem={reduceItem}
        ></Question>
      ))}
    </ul>
  );
};
export default QuestionsList;
