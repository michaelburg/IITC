import "./App.css";
import { useState } from "react";
import Question from "./question";
const FAQ = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    body: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    isopen: false,
  },
  {
    title: "Is Frontend Mentor free?",
    body: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    isopen: false,
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    body: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    isopen: false,
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    body: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    isopen: false,
  },
];
function App() {
  const [faq, setFAQ] = useState(FAQ);

  function reduceItem(itemIndex) {
    if (!faq[itemIndex].isopen) faq.map((item) => (item.isopen = false));
    faq[itemIndex].isopen = !faq[itemIndex].isopen;
    setFAQ([...faq]);
  }

  return (
    <div className="background-image-div">
      <div className="card">
        <h1>FAQs</h1>
        <ul>
          {faq.map((item, index) => (
            <Question
              question={item}
              index={index}
              reduceItem={reduceItem}
            ></Question>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
