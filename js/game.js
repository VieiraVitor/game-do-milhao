let databaseQuestions = [
    {
        question: 'Pergunta 1 ?',
        alternative1: 'isso',
        alternative2: 'aquilo',
        alternative3: 'nao sei',
        alternative4: 'nada',
        answer: 'nada'
    },

    {
        question: 'Pergunta 2 ?',
        alternative1: 'isso',
        alternative2: 'aquilo',
        alternative3: 'nao sei',
        alternative4: 'nada',
        answer: 'nada'
    },
    {
        question: 'Pergunta 3 ?',
        alternative1: 'isso',
        alternative2: 'aquilo',
        alternative3: 'nao sei',
        alternative4: 'nada',
        answer: 'nada'
    },
    {
        question: 'Pergunta 4 ?',
        alternative1: 'isso',
        alternative2: 'aquilo',
        alternative3: 'nao sei',
        alternative4: 'nada',
        answer: 'nada'
    },

]

const maxQuestions = 16
let drawnQuestions = 0

const question = document.querySelector('#question')
const alternatives = document.querySelectorAll('#answer')

questionsAvailable = []
questionsAvailable = databaseQuestions

getNewQuestion = () => {

    //verificar se ainda existem perguntas para serem exibidas
    if(drawnQuestions > maxQuestions){
        //jogador venceu
    }

    //sortear uma questao pelo índice
    const drawnQuestion = Math.floor(Math.random() * questionsAvailable.length)
    question.innerHTML = questionsAvailable[drawnQuestion].question

    alternatives.forEach((alternative, index) => {
        alternative.innerHTML = questionsAvailable[drawnQuestion]['alternative' + (index + 1)]
    })
    
    drawnQuestions++
    //remove a questao sorteada do array
    questionsAvailable.splice(drawnQuestion, 1)
}

getNewQuestion()