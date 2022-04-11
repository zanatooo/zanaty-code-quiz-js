const question = document.querySelector('#question');
const choices = document.querySelector('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarfull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
},
{
    question: "What is the correct syntax for referring to an extranal script called 'zzz.js'?",
    choice1: "<script href='zzz.js'>",
    choice2: "<script name='zzz.js'>",
    choice3: "<script src= 'zzz.js'>",
    choice4: "<script file= 'zzz.js'>",
    answer: 2
},
{
    question: "how do you write 'hello world' in an alert box?",
    choice1: "msgbox('hello world');",
    choice2: "alerBox('hello world'>;",
    choice3: "msg('hello world');>",
    choice4: "alert('hello world';",
    answer: 3
}
]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setIem('mostRecentscore', score)

        return window.location.assign('/end.html')
    }
questionCounter++
progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS'
progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

const questionsIndex = Math.floor(Math.randon() * availableQuestions.length)
currentQuestion = availableQuestions [questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset [ 'number']
    choice.innerText = currentQuestion ['choice' + number]
})

availableQuestions.splice(questionsIndex, 1)
acceptingAnswers = true
}
choices.forEach(choice => {
    choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target 
    const selectedAnswer = selectedChoice.dataset['number']

let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
'incorrect'

if(classToApply === 'correct') {
    incrementScore(SCORE_POINTS)
}
selectedChoice.parentElement.classList.add(classToApply)


setTimeout(() => {
    selectedChoice.parentElement.classList.remove(classToApply)
getNewQuestion()
        }, 1000)
    })
})

icrementScore = num => {
    score +=num
    scoreText.innerText = score
}
startGame()