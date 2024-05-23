quizArr = [
  {
    q: "What is the capital of France?",
    A: "Madrid",
    B: "Berlin",
    C: "Paris",
    D: "Lisbon",
    CorrectAnswer: "C",
    UserAnswer: "",
  },
  {
    q: "Which planet is known as the Red Planet?",
    A: "Earth",
    B: "Mars",
    C: "Jupiter",
    D: "Venus",
    CorrectAnswer: "B",
    UserAnswer: "",
  },
  {
    q: "Who wrote 'Hamlet'?",
    A: "Charles Dickens",
    B: "William Shakespeare",
    C: "Leo Tolstoy",
    D: "Mark Twain",
    CorrectAnswer: "B",
    UserAnswer: "",
  },
  {
    q: "What is the largest mammal?",
    A: "African Elephant",
    B: "Blue Whale",
    C: "Giraffe",
    D: "Hippopotamus",
    CorrectAnswer: "B",
    UserAnswer: "",
  },
  {
    q: "In which year did the Titanic sink?",
    A: "1912",
    B: "1905",
    C: "1898",
    D: "1923",
    CorrectAnswer: "A",
    UserAnswer: "",
  },
  {
    q: "What is the chemical symbol for gold?",
    A: "Au",
    B: "Ag",
    C: "Gd",
    D: "Go",
    CorrectAnswer: "A",
    UserAnswer: "",
  },
  {
    q: "Which country hosted the 2016 Summer Olympics?",
    A: "China",
    B: "Brazil",
    C: "Greece",
    D: "Japan",
    CorrectAnswer: "B",
    UserAnswer: "",
  },
  {
    q: "How many continents are there?",
    A: "5",
    B: "6",
    C: "7",
    D: "8",
    CorrectAnswer: "C",
    UserAnswer: "",
  },
  {
    q: "Who is known as the father of computers?",
    A: "Charles Babbage",
    B: "Alan Turing",
    C: "John von Neumann",
    D: "Bill Gates",
    CorrectAnswer: "A",
    UserAnswer: "",
  },
  {
    q: "What does 'www' stand for in a website browser?",
    A: "World War Web",
    B: "Wide Width Wickets",
    C: "World Wide Web",
    D: "Western Washington World",
    CorrectAnswer: "C",
    UserAnswer: "",
  },
];
choiceArr = ["A", "B", "C", "D"];
function loadQuiz() {
  quizArr = JSON.parse(window.localStorage.getItem("quizArr")) || quizArr;
  for (let i = 0; i < quizArr.length; i++) {
    ansArr = [quizArr[i].A, quizArr[i].B, quizArr[i].C, quizArr[i].D];
    const question = document.createElement("h4");
    question.id = "question";
    question.innerText = quizArr[i].q;
    document.body.appendChild(question);

    const qList = document.createElement("ol");
    qList.type = "A";
    qList.id = "choices";

    for (let j = 0; j < 4; j++) {
      const ans = document.createElement("li");
      if (quizArr[i].UserAnswer == choiceArr[j]) ans.style.color = "blue";
      ans.innerText = ansArr[j];
      ans.id = i + "_" + j;
      ans.onclick = function () {
        submitAns(i, j);
      };
      // ans.onclick = submitAns(i, j);
      qList.appendChild(ans);
    }

    document.body.appendChild(qList);
  }
}
function submitAns(q, a) {
  choice = document.getElementById(q + "_" + a);
  if (quizArr[q].UserAnswer != "") {
    document.getElementById(
      q + "_" + choiceArr.indexOf(quizArr[q].UserAnswer)
    ).style.color = null;
  }
  choice.style.color = "blue";
  quizArr[q].UserAnswer = choiceArr[a];
  localStorage.setItem("quizArr", JSON.stringify(quizArr)); // Corrected method name
}
function resetQuiz() {
  for (let i = 0; i < quizArr.length; i++) {
    quizArr[i].UserAnswer = "";
  }
  window.localStorage.clear();
  const h4Elements = document.querySelectorAll("#question");
  h4Elements.forEach((h4) => {
    h4.remove();
  });
  const olElements = document.querySelectorAll("#choices");
  olElements.forEach((ol) => {
    ol.remove();
  });
  loadQuiz();
}
function submitQuiz() {
  count = 0;
  for (let i = 0; i < quizArr.length; i++) {
    if (quizArr[i].CorrectAnswer == quizArr[i].UserAnswer) {
      count++;
      document.getElementById(
        i + "_" + choiceArr.indexOf(quizArr[i].CorrectAnswer)
      ).style.color = "green";
    } else {
      document.getElementById(
        i + "_" + choiceArr.indexOf(quizArr[i].CorrectAnswer)
      ).style.color = "green";
      try {
        document.getElementById(
          i + "_" + choiceArr.indexOf(quizArr[i].UserAnswer)
        ).style.color = "red";
      } catch {}
    }
  }
  alert("your score is " + count + "/" + quizArr.length);
}
loadQuiz();
