var startDiv = document.getElementById('start');
var startButton = document.getElementById("startButton")
var questionDiv = document.getElementById('question')

// array of objects here for questions
var questions = [
    {
        question: "this is question one",
        answer1: "this is answer 1",
        answer2: "this is answer 2",
        correct: "this is answer 1"
    },
    {
        // another question here, etc
    }
]

function startQuiz() {
    startDiv.style.display = 'none';
    questionDiv.style.display = 'block';
    renderQuestions()
}

function renderQuestions() {
    // checkout the textContent() method for populating questions and answers
}



startButton.addEventListener("click", startQuiz);