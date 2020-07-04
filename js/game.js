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
        question: 'Pergunta 3 ?',
        alternative1: 'isso',
        alternative2: 'aquilo',
        alternative3: 'nao sei',
        alternative4: 'nada',
        answer: 2
    },

]

const maxQuestions = 12
let drawnQuestions = 0
let questionSelected = {}
let questionsAvailable = []
let alternativeSelected
let price = 0
let count = 5
var timer = null
const question = document.querySelector('#question')
const alternatives = document.querySelectorAll('.answer')

//variaveis do tempo
const timeLeft = document.querySelector('.time-left')

//variaveis dos valores ganhos

const valueCorrect = document.querySelector('.correct')
const valueIncorrect = document.querySelector('.incorrect')
const valueStop = document.querySelector('.stop')
// const prize = document.querySelector('#prize')
// const openModalPrize = document.querySelector('#open-modal-prize')


// function openPrize() {
//     prize.innerText = 1
//     openModalPrize.style.display = "flex";
// }

//variaveis dos modais
var closeModal = document.querySelectorAll(".close")
var modalAnswers = document.querySelector("#open-modal-answer")
var openModalAnswer = document.querySelectorAll(".open-modal-answer")
var confirmAnswer = document.querySelector('#confirm-answer')

var modalStop = document.querySelector("#open-modal-stop")
var openModalStop = document.querySelector(".open-modal-stop")
var confirmStop = document.querySelector("#confirm-stop")

//modal next question ou erro question
var openModalNextQuestion = document.querySelector("#open-modal-next-question")
var openModalIncorrectAnswer = document.querySelector("#open-modal-incorrect-answer")

// verifica se confirma a resposta ou não
openModalAnswer.forEach(e => e.onclick = () => {
    modalAnswers.style.display = "flex";
})

closeModal.forEach(e => e.onclick = () => {
    resetAnswer()
})

confirmAnswer.onclick = () => {

    if (verifyAnswer()) {
        correctAnswer()

    } else {
        incorrectAnswer()
    }
}

//verifica o botão 'parar
openModalStop.onclick = () => {
    modalStop.style.display = "flex";
}

confirmStop.onclick = () => window.location.href = "end-game.html"


//espera modal next question finalizar
function correctAnswer() {
    openModalNextQuestion.style.display = "flex"
    closeConfirmAnswerModal()
    setTimeout(() => {
        openModalNextQuestion.style.display = "none"
        resetAnswer()
        getNewQuestion()
    }, 3000)
}

function incorrectAnswer() {
    openModalIncorrectAnswer.style.display = "flex"
    localStorage.setItem("mostRecentPrize", (price / 4))
    // console.log((price / 4))
    closeConfirmAnswerModal()
    markCorrectAnswer()
    setTimeout(() => {
        openModalNextQuestion.style.display = "none"
        window.location.href = "end-game.html"
    }, 3000)
}

function markCorrectAnswer() {
    alternatives.forEach(alternative => {
        if (questionSelected.answer == alternative.dataset['id']) {
            alternative.classList.add('answer-correct')
        }
    })
}

//inicia o jogo
startGame = () => {
    // openPrize()
    price = 0
    drawnQuestions = 0
    questionsAvailable = databaseQuestions
    getNewQuestion()
}

//gera uma nova questao
getNewQuestion = () => {

    //verificar se ainda existem perguntas para serem exibidas
    if (drawnQuestions >= maxQuestions) {
        console.log("MAXIMO DE PERGUNTAS")
        localStorage.setItem("mostRecentPrize", price)
        window.location.href = "end-game.html"
    } else {
        drawnQuestions++
        console.log(price)
        setPrice()

        //sortear uma questao pelo índice
        const drawnQuestion = Math.floor(Math.random() * questionsAvailable.length)
        questionSelected = questionsAvailable[drawnQuestion]
        question.innerText = questionSelected.question

        alternatives.forEach(alternative => {
            const alternativeNumber = alternative.dataset['id']
            alternative.innerText = questionSelected['alternative' + alternativeNumber]
        })

        //remove a questao sorteada do array
        questionsAvailable.splice(drawnQuestion, 1)
    }
}

//seleciona a alternativa marcada
alternatives.forEach(alternative => {
    alternative.addEventListener('click', e => {
        alternativeSelected = e.target
        alternativeSelected.classList.add('answer-selected')
    })
})

//reseta a alternativa caso o jogador não confirme sua escolha
resetAnswer = () => {
    closeConfirmAnswerModal()
    alternatives.forEach(alternative => {
        alternative.classList.remove('answer-selected')
    })
}

closeConfirmAnswerModal = () => {
    modalAnswers.style.display = "none";
    modalStop.style.display = "none";
}

//verifica e a resposta esta correta
verifyAnswer = () => {
    return questionSelected.answer == alternativeSelected.dataset['id'] ? true : false
}

//altera os valores de ganhos do jogo
alterPrizeValues = () => {
    valueCorrect.innerText = price + ' mil'
    valueIncorrect.innerText = (price / 4) + ' mil'
    valueStop.innerText = (price / 2) + ' mil'
}

function setPrice() {
    if (drawnQuestions <= 5) {
        if (drawnQuestions == 1) {
            price = 1
        } else {
            console.log("1 round", price)
            verifyPrice()
            price++
        }
    } else if (drawnQuestions > 5 && drawnQuestions <= 10) {
        console.log("2 round", price)
        verifyPrice()
        console.log("afeter verify", price)
        price += 10
    } else if (drawnQuestions > 10 && drawnQuestions <= 15) {
        console.log("3 round", price)
        verifyPrice()
        price += 100
    } else {
        verifyPrice()
        price = 1
    }

    alterPrizeValues()
}

verifyPrice = () => {
    return price == 5 || price == 50 || price == 500 ? price = 0 : price
}

//contador regressivo do tempo

function timeDecrease() {
    if ((count - 1) >= 0) {
        count--
        timeLeft.innerText = count
    } else {
        timeExpired()
    }
    timer = setTimeout(timeDecrease, 1000)
}

function stopTime() {
    clearTimeout(timer)
    count = 5;
}

function timeExpired() {
    //tempo expirou e você perdeu
    window.location.href = "end-game.html"
}

startGame()