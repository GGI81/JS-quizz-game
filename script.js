const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreElement = document.getElementById("score");

let scoreCnt = 0;

let shuffledQuestions, currentQuestionIndex;
 
let correctAnswers = 0; 
 
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
 
context.rotate(45 * Math.PI / 180);
context.fillStyle = '#003F5E';
context.fillRect(-100, -350, 700, 700);
 
context.fillStyle = '#003F5E';
context.fillRect(800, -350, 90, 90);
 
context.fillStyle = '#003F5E';
context.fillRect(700, -850, 400, 400);
 
context.fillStyle = '#003F5E';
context.fillRect(700, 90, 200, 200);
 
context.fillStyle = '#003F5E';
context.fillRect(1100, -90, 100, 100);
 
context.fillStyle = '#003F5E';
context.fillRect(1400, -390, 700, 700);
 
context.fillStyle = '#003F5E';
context.fillRect(1200, -1890, 700, 700);
 
context.fillStyle = '#003F5E';
context.fillRect(1600, -1350, 700, 700);

startButton.addEventListener("click", () => {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    scoreCnt = 0;
    scoreElement.textContent = "Резултат: " + 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
});
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});
 
 
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
 
function showQuestion(question) {
    questionElement.innerText = question.question;
 
    let shuffledArray = question.answers.sort((a, b) => 0.5 - Math.random());
 
    shuffledArray.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
 
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    //setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Рестарт";
        startButton.classList.remove("hide");

    }

    if(correct){
        
        let scoreString = scoreElement.textContent;

        let currentScore = parseInt(scoreString.slice(10, 12))

        currentScore++; 

        scoreElement.textContent = "Резултат: " + currentScore;
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}
 
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}
 
 
const questions = [{
        question: "До кой век продължава Средновековието?",
        answers: [{
                text: "до XIII век (включително)",
                correct: false
            },
            {
                text: "до XIV век (включително)",
                correct: true
            },
            {
                text: "до XV век (включително) ",
                correct: false
            },
            {
                text: "до XVI век (включително) ",
                correct: false
            },
        ],
    },
    {
        question: "С имената на кои библейски герои се свързва мотивът за братоубийството?",
        answers: [{
                text: "Адам и Ева",
                correct: false
            },
            {
                text: "Мойсей и фараона",
                correct: false
            },
            {
                text: "Каин и Авел ",
                correct: true
            },
            {
                text: "Пилат и Симон ",
                correct: false
            },
        ],
    },
    {
        question: "Кое НЕ е тема в текстовете на старобългарската литература?",
        answers: [{
                text: "животът на светците",
                correct: false
            },
            {
                text: "славянската азбука ",
                correct: false
            },
            {
                text: "реално съществували личности",
                correct: false
            },
            {
                text: "природата",
                correct: true
            },
        ],
    },
    {
        question: "Какво е апология?",
        answers: [{
                text: "възторжена възхвала на някого или на нещо",
                correct: true
            },
            {
                text: "уподобяване на един предмет е друг ",
                correct: false
            },
            {
                text: "песен в чест на бог Аполон",
                correct: false
            },
            {
                text: "извинение към хората и Бог",
                correct: false
            },
        ],
    },
    {
        question: `Авторът на "Азбучна молитва" е:`,
        answers: [{
                text: "създателят на старобългарската кирилска азбука",
                correct: false
            },
            {
                text: "най-плодовитият последовател на Солунските братя",
                correct: true
            },
            {
                text: `основателят на книжовната школа през "Златния век"`,
                correct: false
            },
            {
                text: "най-добрият от преките ученици на Константин-Кирил",
                correct: false
            },
        ],
    },
    {
        question: `"Декамерон"е:`,
        answers: [{
                text: "роман",
                correct: false
            },
            {
                text: "сборник с новели ",
                correct: true
            },
            {
                text: "епическа поема",
                correct: false
            },
            {
                text: "комедия",
                correct: false
            },
        ],
    },
    {
        question: `Кой е основният проблем, поставен в поемата "Илиада"?`,
        answers: [{
                text: "за гибелта на Троя",
                correct: false
            },
            {
                text: "борбата за любовта",
                correct: false
            },
            {
                text: "за войната и победата",
                correct: false
            },
            {
                text: "за наранената чест и достойнство",
                correct: true
            },
        ],
    },
];
