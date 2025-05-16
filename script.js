const questions = [
{
question: "Qual é uma função principal da zona rural?",
answers: [
{ text: "Produzir alimentos", correct: true },
{ text: "Administrar empresas", correct: false },
{ text: "Gerar poluição", correct: false },
{ text: "Oferecer serviços bancários", correct: false }
]
},
{
question: "O que a cidade fornece ao campo?",
answers: [
{ text: "Tecnologia e infraestrutura", correct: true },
{ text: "Plantação de alimentos", correct: false },
{ text: "Terras para cultivo", correct: false },
{ text: "Água de rios", correct: false }
]
},
{
question: "Como o campo contribui com a cidade?",
answers: [
{ text: "Exportando alimentos e matérias-primas", correct: true },
{ text: "Construindo prédios", correct: false },
{ text: "Cobrando impostos", correct: false },
{ text: "Investindo em ações", correct: false }
]
}
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const scoreText = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");
const restartButton = document.getElementById("restart-btn");

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
resultContainer.classList.add("hidden");
quizContainer.classList.remove("hidden");
showQuestion();
}

function showQuestion() {
resetState();
let currentQuestion = questions[currentQuestionIndex];
questionElement.innerText = currentQuestion.question;

currentQuestion.answers.forEach((answer) => {
const button = document.createElement("button");
button.innerText = answer.text;
button.classList.add("answer-btn");
if (answer.correct) {
button.dataset.correct = "true";
}
button.addEventListener("click", selectAnswer);
answersContainer.appendChild(button);
});
}

function resetState() {
nextButton.style.display = "none";
while (answersContainer.firstChild) {
answersContainer.removeChild(answersContainer.firstChild);
}
}

function selectAnswer(e) {
const selectedButton = e.target;
const isCorrect = selectedButton.dataset.correct === "true";

if (isCorrect) {
selectedButton.style.backgroundColor = "#a5d6a7";
score++;
} else {
selectedButton.style.backgroundColor = "#ef9a9a";
}

Array.from(answersContainer.children).forEach((button) => {
button.disabled = true;
if (button.dataset.correct === "true") {
button.style.border = "2px solid #388e3c";
}
});

nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
showQuestion();
} else {
showScore();
}
});

function showScore() {
quizContainer.classList.add("hidden");
resultContainer.classList.remove("hidden");
scoreText.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
}

document.getElementById("restart-btn").addEventListener("click", startQuiz);

// Inicia o quiz automaticamente ao carregar
startQuiz();
