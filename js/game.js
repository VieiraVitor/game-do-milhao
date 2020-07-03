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

const question = document.querySelector('#question')
const alternatives = document.querySelectorAll('.answer')
const btnClicked = document.querySelector('#answer1')



selectedChoice = () => {
    btnClicked.addEventListener('click', () => btnClicked.style.backgroundColor = '#fff')
}

questionsAvailable = []
questionsAvailable = databaseQuestions

getNewQuestion = () => {

    //verificar se ainda existem perguntas para serem exibidas
    if(drawnQuestions > maxQuestions){
        //jogador venceu
    }

    //sortear uma questao pelo índice
    const drawnQuestion = Math.floor(Math.random() * questionsAvailable.length)
    questionSelected = questionsAvailable[drawnQuestion]
    question.innerHTML = questionSelected.question

    alternatives.forEach(alternative => {
        const alternativeNumber = alternative.dataset['id']
        alternative.innerHTML = questionSelected['alternative' + alternativeNumber]
    })
    
    drawnQuestions++
    //remove a questao sorteada do array
    questionsAvailable.splice(drawnQuestion, 1)
}

getNewQuestion()

alternatives.forEach( alternative => {
    alternative.addEventListener('click', e => {
        
        const alternativeSelected = e.target.dataset['id']

        e.target.classList.add('answer-selected')
        
        let classToApply = alternativeSelected == questionSelected.answer ? 'answer-corret' : 'answer-incorrect'

        // se confirmar a resposta
            .target.classList.add(classToApply)

    }
)})
