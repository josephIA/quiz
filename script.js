


const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Who is the President of the US?",
        a: "Barack Obama",
        b: "Donald Trump",
        c: "Joe Biden",
        d: "George Bush",
        correct: "c",
    },
    {
        question: "What is the most used programming language in 2023?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who founded Microsoft?",
        a: "Steve Jobs",
        b: "Bill Gates",
        c: "Elon Musk",
        d: "Mark Zuckerberg",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Trainer Marking Language",
        b: "HyperText Markup Language",
        c: "HyperText Markdown Language",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Who made this WepApp?",
        a: "Code king",
        b: "Patrick Ovat",
        c: "Bisong O",
        d: "Joseph Amajama",
        correct: "d",
    }
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
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = ` 
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

showEl=()=>{
    document.getElementById("demo").style.display="block";
}