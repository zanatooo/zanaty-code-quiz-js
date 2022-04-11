const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScore')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = json.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5
finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.prentDefault()
    const score= {
        score: mostRecentScore,
        name: username. value
    }
highScores.push(score)
highScores.sort( (a,b) => { 
    return b.score - a.score
})
highScores.splice(5)
localStorage.setItem('highScores', json.stringify(highScroes))
window.location.assign('/')

}