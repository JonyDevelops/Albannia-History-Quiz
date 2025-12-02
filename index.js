function togglemenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
}

const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.hamburger').classList.remove('active');
            document.querySelector('nav').classList.remove('active');
            });
        });

const questions = [
    { question: "When did Albania declare its independence?",
        answers: [
            { text: "1912", correct: true },
            { text: "1908", correct: false },
            { text: "1920", correct: false },
            { text: "1939", correct: false },
        ]
    },
    { question: "Who was the first king of Albania?",
        answers: [
                { text: "Zog I", correct: true },
                { text: "Skanderbeg", correct: false },
                { text: "Ismail Qemali", correct: false },
                { text: "Ahmet Zogu", correct: false },
        ]
    },
    { question: "What is the capital city of Albania?",
        answers: [
            { text: "Tirana", correct: true },
            { text: "Durrës", correct: false },
            { text: "Vlorë", correct: false },
            { text: "Shkodër", correct: false },
        ]
    },
    { question: "Which empire ruled over Albania before its independence?",
        answers: [
            { text: "Ottoman Empire", correct: true },
            { text: "Austro-Hungarian Empire", correct: false },
            { text: "Byzantine Empire", correct: false },
            { text: "Roman Empire", correct: false },
        ]
    },
    { question: "What is the official language of Albania?",
        answers: [
            { text: "Albanian", correct: true },
            { text: "Greek", correct: false },
            { text: "Italian", correct: false },
            { text: "Turkish", correct: false },
        ]
    },
    { question: "Who was the national hero of Albania who resisted the Ottoman Empire?",
        answers: [
            { text: "Skanderbeg", correct: true },
            { text: "Ismail Qemali", correct: false },
            { text: "Enver Hoxha", correct: false },
            { text: "Ahmet Zogu", correct: false },
        ]
    },
    { question: "When did Albania become a  communist state?",
        answers: [
            { text: "1946", correct: true },
            { text: "1939", correct: false },
            { text: "1950", correct: false },
            { text: "1960", correct: false },
        ]
    },
    { question: "What is the currency of Albania?",
        answers: [
            { text: "Lek", correct: true },
            { text: "Euro", correct: false },
            { text: "Dollar", correct: false },
            { text: "Dinar", correct: false },
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.querySelector('.progress-bar');

let currentQuestionindex = 0;
let score = 0;

function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none"; 
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1; 

    questionCounter.innerHTML = `Question ${questionNo} of ${questions.length}`;

    const progressPercent = (questionNo / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text; 
        button.classList.add("quiz-option");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        button.disabled = true;
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    
    progressBar.style.width = '100%';
    
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"; 
    nextButton.style.display = "block";
    
    questionCounter.innerHTML = '';
}

function handleNextButton() {
    currentQuestionindex++;
    if(currentQuestionindex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionindex >= questions.length){
        startQuiz();
    } else {
        handleNextButton();
    }
});


startQuiz();