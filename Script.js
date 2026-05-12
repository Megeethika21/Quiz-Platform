const questions = [

  {
    question: "Which language is mainly used for web styling?",
    options: ["HTML", "Python", "CSS", "Java"],
    answer: "CSS"
  },

  {
    question: "Which keyword is used to declare variables in JavaScript?",
    options: ["int", "var", "string", "define"],
    answer: "var"
  },

  {
    question: "Which company developed Java?",
    options: ["Google", "Sun Microsystems", "Microsoft", "Apple"],
    answer: "Sun Microsystems"
  },

  {
    question: "Which HTML tag is used for JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>"
  },

  {
    question: "Which database is relational?",
    options: ["MongoDB", "Firebase", "MySQL", "Redis"],
    answer: "MySQL"
  }

];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("scoreText");

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {

  resetState();

  const currentQuiz = questions[currentQuestion];

  questionElement.textContent = currentQuiz.question;

  currentQuiz.options.forEach(option => {

    const button = document.createElement("button");

    button.textContent = option;

    button.classList.add("option-btn");

    optionsElement.appendChild(button);

    button.addEventListener("click", () => {
      selectAnswer(button, currentQuiz.answer);
    });

  });

}

function resetState() {

  nextBtn.style.display = "none";

  while (optionsElement.firstChild) {
    optionsElement.removeChild(optionsElement.firstChild);
  }

}

function selectAnswer(button, correctAnswer) {

  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(btn => {

    btn.disabled = true;

    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }

  });

  if (button.textContent === correctAnswer) {

    score++;

  } else {

    button.classList.add("wrong");

  }

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {

  currentQuestion++;

  if (currentQuestion < questions.length) {

    loadQuestion();

  } else {

    showResult();

  }

});

function showResult() {

  quizBox.classList.add("hidden");

  resultBox.classList.remove("hidden");

  scoreText.textContent =
    `You scored ${score} out of ${questions.length}`;

}

function restartQuiz() {

  currentQuestion = 0;

  score = 0;

  resultBox.classList.add("hidden");

  quizBox.classList.remove("hidden");

  loadQuestion();

}
