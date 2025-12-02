// hamburger nav bar 
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

//

// Quiz

//To do List

//1. How to display ARRAYS of OBJECTS to html
//2. event listener question button
//3. event listener to answer-button
//4. event listener to 'next' button
//5. event listener to question button

const questionID = document.getElementById('question');
const answerBtn = document.getElementById('answer-buttons');

let score = 0;
let currentQuizIndex = 0;

fruits.forEach(fruit => console.log(questions.question));