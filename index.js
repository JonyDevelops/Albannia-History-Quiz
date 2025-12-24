
function togglemenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}


// Close menu on link click (mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('nav').classList.remove('active');
        document.body.style.overflow = '';
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

const questionElement = document.getElementById('questionDiv');
const answerBtn = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const MAX_SCORE_PER_QUESTION = 4; 

let score = 0;
let currentQuestionIndex = 0;

if (questionElement && answerBtn && nextBtn) { 
    startQuiz();
}

function startQuiz(){
    score = 0;
    currentQuestionIndex = 0;
    nextBtn.textContent= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    let currentQuestion = questions[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        answerBtn.appendChild(button);
        button.classList.add('answer-button');

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
        })
    }

function resetState(){
    nextBtn.style.display = "none"; 

    while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild);
    }
}
    function selectAnswer(e){
        const selectedBtn = e.target
        const isCorrect = selectedBtn.dataset.correct === "true";

        if(isCorrect){
        selectedBtn.classList.add('correct');
        score = score + MAX_SCORE_PER_QUESTION; 
        }
        
        else{
        selectedBtn.classList.add('incorrect');
        }
        
        Array.from(answerBtn.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add('correct');
            }
            button.disabled = true;
        })
        
        nextBtn.style.display = "block";
    }
        
    function handleNextButton(){
        currentQuestionIndex++;
        
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            finishQuiz();
        }
    }

    function finishQuiz(){
        localStorage.setItem('quizScore', score);
        localStorage.setItem('totalQuestions', questions.length);
        localStorage.setItem('maxScore', questions.length * MAX_SCORE_PER_QUESTION);
        
        window.location.href = './Results.html';
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            handleNextButton();
        });
    }


const resultsContainer = document.getElementById('results-container');
const restartButton = document.getElementById('restart-btn');

if (resultsContainer) { 
    displayResults();
}

function displayResults() {
    const finalScore = parseInt(localStorage.getItem('quizScore'));
    const maxScore = parseInt(localStorage.getItem('maxScore'));

    if (isNaN(finalScore)) {
        resultsContainer.textContent = '';
        
        const heading = document.createElement('h2');
        heading.textContent = 'Quiz data not found. Please take the quiz first.';
        
        const link = document.createElement('a');
        link.href = './quiz.html';
        link.className = 'quiz-button';
        link.textContent = 'Start Quiz';
        
        resultsContainer.appendChild(heading);
        resultsContainer.appendChild(link);
        return;
    }

    const percentage = (finalScore / maxScore) * 100;
    let level = "";
    let feedback = "";
    let color = "";

    if (finalScore >= 24) { 
        level = "Expert";
        feedback = "Outstanding! Your deep knowledge of Albanian history is truly impressive. You are a history master!";
        color = "green";
    } else if (finalScore >= 16) { 
        level = "Good Knowledge";
        feedback = "Well done! You have a solid understanding of key events and figures. Keep exploring to reach expert level.";
        color = "blue";
    } else if (finalScore >= 8) { 
        level = "Basic Understanding";
        feedback = "You've laid a good foundation. Focus on reviewing specific historical periods to strengthen your knowledge.";
        color = "orange";
    } else { 
        level = "Beginner";
        feedback = "This is a great starting point! We recommend using the tutorial resources to begin your journey into Albanian history.";
        color = "red";
    }

    resultsContainer.textContent = '';
    
    const title = document.createElement('h1');
    title.style.color = 'white';
    title.style.textAlign = 'center';
    title.textContent = 'Your Results';
    
    const resultCard = document.createElement('div');
    resultCard.className = 'result-card';
    
    const scoreHeading = document.createElement('h2');
    const bR = document.createElement('br');
    scoreHeading.append(`Your Score: `, bR, `${finalScore} / ${maxScore}`);
    scoreHeading.classList.add('score-heading');
    
    const percentagePara = document.createElement('p');
    percentagePara.textContent = `Percentage: ${percentage.toFixed(0)}%`;
    
    const levelHeading = document.createElement('h3');
    levelHeading.style.color = color;
    levelHeading.textContent = level;
    levelHeading.style.textTransform = 'uppercase';
    levelHeading.style.fontSize = '1.6rem';
    
    const feedbackPara = document.createElement('p');
    feedbackPara.textContent = feedback;
    
    const restartBtn = document.createElement('button');
    restartBtn.id = 'restart-btn';
    restartBtn.className = 'quiz-button';
    restartBtn.textContent = 'Play Again';
    
    resultCard.appendChild(scoreHeading);
    resultCard.appendChild(percentagePara);
    resultCard.appendChild(levelHeading);
    resultCard.appendChild(feedbackPara);
    
    resultsContainer.appendChild(title);
    resultsContainer.appendChild(resultCard);
    resultsContainer.appendChild(restartBtn);
    
    restartBtn.addEventListener('click', () => {
        window.location.href = './quiz.html';
    });
}
