const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

let currentIndex = 0;
let questionsCorrect = 0;

var questions = [
        {
            question: "São características das nações indígenas brasileiras antes da chegada dos portugueses ao Brasil, exceto:",
            answers: [
            { option: "Organizavam sua vida através do modelo capitalista", correct: true },
            { option: "Eram civilizações politeístas", correct: false },
            { option: "Economia baseada na caça e coleta de frutos na mata", correct: false },
            ],
        },
        {
            question: "Qual dos povos abaixo não corresponde a uma nação indígena brasileira?",
            answers: [
            { option: "Yanomami.", correct: false },
            { option: "Apaches.", correct: true },
            { option: "Tupinambás.", correct: false },
            ],
        },
        {
            question: " Eram características dos indígenas nativos do Brasil na chegada dos portugueses, em 1500",
            answers: [
            { option: "a existência de apenas um idioma comum a todas as tribos.", correct: false },
            { option: "a ausência de artesanato", correct: false },
            { option: "a obtenção de recursos baseada na coleta, caça e agricultura.", correct: true },
            ],
        },
        {
            question: "Eram povos nativos do Brasil:",
            answers: [
            { option: "Tupiniquins e Apaches", correct: false },
            { option: "Toltecas e Incas", correct: false },
            { option: "Tupinambás e Guaranis", correct: true },
            ],
        },
];

function finish() {
    textFinish.innerHTML = "Você acertou " +  questionsCorrect + " de " + questions.length;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}


btnRestart.addEventListener("click", function(){

    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();

});
    
function loadQuestion() {
    spnQtd.innerHTML = (currentIndex + 1) + "/" + questions.length;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
        </button>
        `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}
