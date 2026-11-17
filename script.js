//your JS code here. If required.
const quizData = [
  { question: "Which language runs in a web browser?",
    a: "Java", b: "C", c: "Python", d: "JavaScript", correct: "d" },
  { question: "What does CSS stand for?",
    a: "Central Style Sheets", b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets", d: "Cars SUVs Sailboats", correct: "b" },
  { question: "What does HTML stand for?",
    a: "Hypertext Markup Language", b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis", correct: "a" },
  { question: "What year was JavaScript launched?",
    a: "1996", b: "1995", c: "1994", d: "none of the above", correct: "b" },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const q = quizData[currentQuiz];
  questionEl.innerText = q.question;
  a_text.innerText = q.a;
  b_text.innerText = q.b;
  c_text.innerText = q.c;
  d_text.innerText = q.d;
}

function deselectAnswers() {
  answerEls.forEach((el) => (el.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((el) => {
    if (el.checked) answer = el.id;
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (!answer) return;                      // must pick an option

  if (answer === quizData[currentQuiz].correct) score++;
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly</h2>
      <button onclick="location.reload()">Reload</button>
    `;
  }
});