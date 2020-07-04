let databaseQuestions = [
    {
        question: 'Pergunta 1 ?',
        alternative1: 'isso',
        alternative2: 'aquilo',
        alternative3: 'nao sei',
        alternative4: 'nada',
        answer: 4
    },

    {
        question: 'Pergunta 2 ?',
        alternative1: 'isso',
        alternative2: 'aquilo',
        alternative3: 'nao sei',
        alternative4: 'nada',
        answer: 2
    },
    {
        question: 'Pergunta 3 ?',
        alternative1: 'isso',
        alternative2: 'aquilo',
        alternative3: 'nao sei',
        alternative4: 'nada',
        answer: 2
    },
    {
        question: 'Pergunta 4 ?',
        alternative1: 'isso',
        alternative2: 'aquilo',
        alternative3: 'nao sei',
        alternative4: 'nada',
        answer: 1
    },

]

const maxQuestions = 16
let drawnQuestions = 0
let questionSelected = {}
let questionsAvailable = []
let price = 0
const question = document.querySelector('#question')
const alternatives = document.querySelectorAll('.answer')
const btnClicked = document.querySelector('#answer1')

var span = document.querySelector(".close");
var modal = document.querySelector("#openModal");
var OpenModal = document.querySelectorAll(".openModal");

OpenModal.forEach(e => e.onclick = () => {
    modal.style.display = "flex";
})

span.onclick = () => {
    modal.style.display = "none";
    resetColor()
}

startGame = () => {
    price = 0
    drawnQuestions = 0
    questionsAvailable = databaseQuestions
    getNewQuestion()
}

getNewQuestion = () => {

    //verificar se ainda existem perguntas para serem exibidas
    if (drawnQuestions > maxQuestions) {
        //jogador venceu
    }

    drawnQuestions++

    //sortear uma questao pelo índice
    const drawnQuestion = Math.floor(Math.random() * questionsAvailable.length)
    questionSelected = questionsAvailable[drawnQuestion]
    question.innerHTML = questionSelected.question

    alternatives.forEach(alternative => {
        const alternativeNumber = alternative.dataset['id']
        alternative.innerHTML = questionSelected['alternative' + alternativeNumber]
    })


    //remove a questao sorteada do array
    questionsAvailable.splice(drawnQuestion, 1)
}

resetColor = () => {
    alternatives.forEach(alternative => {
        alternative.classList.remove('answer-selected')
    })
}

alternatives.forEach(alternative => {
    alternative.addEventListener('click', e => {
        const alternativeSelected = e.target
        alternativeSelected.classList.add('answer-selected')
    })
})

startGame()