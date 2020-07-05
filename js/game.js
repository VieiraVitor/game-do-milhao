let databaseQuestions = [
    {
        question: 'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?',
        alternative1: 'Tem entre 2 a 4 litros. São retirados 450 mililitros',
        alternative2: 'Tem entre 4 a 6 litros. São retirados 450 mililitros',
        alternative3: 'Tem 10 litros. São retirados 2 litros',
        alternative4: 'Tem 7 litros. São retirados 1,5 litros',
        answer: 2
    },
    {
        question: 'De quem é a famosa frase “Penso, logo existo”?',
        alternative1: 'Platão',
        alternative2: 'Galileu Galilei',
        alternative3: 'Descartes',
        alternative4: 'Sócrates',
        answer: 3
    },
    {
        question: 'De onde é a invenção do chuveiro elétrico?',
        alternative1: 'França',
        alternative2: 'Inglaterra',
        alternative3: 'Brasil',
        alternative4: 'Austrália',
        answer: 3
    },
    {
        question: 'Quais o menor e o maior país do mundo?',
        alternative1: 'Vaticano e Rússia',
        alternative2: 'Nauru e China',
        alternative3: 'Mônaco e Canadá',
        alternative4: 'Malta e Estados Unidos',
        answer: 1
    },
    {
        question: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
        alternative1: 'Jânio Quadros',
        alternative2: 'Jacinto Anjos',
        alternative3: 'João Figueiredo',
        alternative4: 'João Goulart',
        answer: 4
    },
    {
        question: 'Qual o grupo em que todas as palavras foram escritas corretamente?',
        alternative1: 'Asterístico, beneficiente, meteorologia, entertido',
        alternative2: 'Asterisco, beneficente, meteorologia, entretido',
        alternative3: 'Asterisco, beneficente, metereologia, entretido',
        alternative4: 'Asterístico, beneficiente, metereologia, entretido',
        answer: 2
    },
    {
        question: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
        alternative1: 'O Senhor dos Anéis',
        alternative2: 'Dom Quixote',
        alternative3: 'O Pequeno Príncipe',
        alternative4: 'Ela, a Feiticeira',
        answer: 2
    },
    {
        question: 'Quantas casas decimais tem o número pi?',
        alternative1: 'Duas',
        alternative2: 'Centenas',
        alternative3: 'Infinitas',
        alternative4: 'Vinte',
        answer: 3
    },
    {
        question: 'Atualmente, quantos elementos químicos a tabela periódica possui?',
        alternative1: '113',
        alternative2: '109',
        alternative3: '108',
        alternative4: '118',
        answer: 4
    },
    {
        question: 'Quais os países que têm a maior e a menor expectativa de vida do mundo?',
        alternative1: 'Japão e Serra Leoa',
        alternative2: 'Austrália e Afeganistão',
        alternative3: 'Itália e Chade',
        alternative4: 'Brasil e Congo',
        answer: 1
    },
    {
        question: 'O que a palavra legend significa em português?',
        alternative1: 'Legenda',
        alternative2: 'Conto',
        alternative3: 'História',
        alternative4: 'Lenda',
        answer: 4
    },
    {
        question: 'Qual o número mínimo de jogadores numa partida de futebol?',
        alternative1: '8',
        alternative2: '10',
        alternative3: '9',
        alternative4: '7',
        answer: 4
    },
    {
        question: 'Quais os principais autores do Barroco no Brasil?',
        alternative1: 'Gregório de Matos, Bento Teixeira e Manuel Botelho de Oliveira',
        alternative2: 'Miguel de Cervantes, Gregório de Matos e Danthe Alighieri',
        alternative3: 'Castro Alves, Bento Teixeira e Manuel Botelho de Oliveira',
        alternative4: 'Álvares de Azevedo, Gregório de Matos e Bento Teixeira',
        answer: 1
    },
    {
        question: 'Quais as duas datas que são comemoradas em novembro?',
        alternative1: 'Independência do Brasil e Dia da Bandeira',
        alternative2: 'Proclamação da República e Dia Nacional da Consciência Negra',
        alternative3: 'Dia do Médico e Dia de São Lucas',
        alternative4: 'Dia de Finados e Dia Nacional do Livro',
        answer: 2
    },
    {
        question: 'Quem pintou "Guernica"?',
        alternative1: 'Paul Cézanne',
        alternative2: 'Pablo Picasso',
        alternative3: 'Diego Rivera',
        alternative4: 'Tarsila do Amaral',
        answer: 2
    },
    {
        question: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
        alternative1: '12 minutos',
        alternative2: '1 dia',
        alternative3: '12 horas',
        alternative4: '8 minutos',
        answer: 4
    },
    {
        question: 'Qual a tradução da frase “Fabiano cogió su saco antes de salir”?',
        alternative1: 'Fabiano coseu seu paletó antes de sair',
        alternative2: 'Fabiano fechou o saco antes de sair',
        alternative3: 'Fabiano pegou seu paletó antes de sair',
        alternative4: 'Fabiano cortou o saco antes de cair',
        answer: 3
    },
    {
        question: 'Qual a nacionalidade de Che Guevara?',
        alternative1: 'Cubana',
        alternative2: 'Peruana',
        alternative3: 'Boliviana',
        alternative4: 'Argentina',
        answer: 4
    },
    {
        question: 'Quais são os três predadores do reino animal reconhecidos pela habilidade de caçar em grupo, se camuflar para surpreender as presas e possuir sentidos apurados, respectivamente:',
        alternative1: 'Tubarão branco, crocodilo e sucuri',
        alternative2: 'Tigre, gavião e orca',
        alternative3: 'Hiena, urso branco e lobo cinzento',
        alternative4: 'Orca, onça e tarântula',
        answer: 3
    },
    {
        question: 'Qual a altura da rede de vôlei nos jogos masculino e feminino?',
        alternative1: '2,5 m e 2,0 m',
        alternative2: '1,8 m e 1,5 m',
        alternative3: '2,45 m e 2,15 m',
        alternative4: '2,43 m e 2,24 m',
        answer: 4
    },
    {
        question: 'Em que ordem surgiram os modelos atômicos?',
        alternative1: 'Rutherford-Bohr, Rutherford, Thomson, Dalton',
        alternative2: 'Dalton, Rutherford-Bohr, Thomson, Rutherford',
        alternative3: 'Dalton, Thomson, Rutherford-Bohr, Rutherford',
        alternative4: 'Dalton, Thomson, Rutherford, Rutherford-Bohr',
        answer: 4
    },
    {
        question: 'Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?',
        alternative1: 'Caipora',
        alternative2: 'Saci',
        alternative3: 'Lobisomem',
        alternative4: 'Boitatá',
        answer: 1
    },
    {
        question: 'Em que período da pré-história o fogo foi descoberto?',
        alternative1: 'Neolítico',
        alternative2: 'Paleolítico',
        alternative3: 'Idade dos Metais',
        alternative4: 'Idade Média',
        answer: 2
    },
]

const maxQuestions = 2
let drawnQuestions = 0
let questionSelected = {}
let questionsAvailable = []
let alternativeSelected
let price = 0
let count = 61
const question = document.querySelector('#question')
const alternatives = document.querySelectorAll('.answer')
const choices = Array.from(document.getElementsByClassName("flex-container-alternative"))

//variaveis do tempo
const timeLeft = document.querySelector('.time-left')

//variaveis dos valores ganhos

const valueCorrect = document.querySelector('.correct')
const valueIncorrect = document.querySelector('.incorrect')
const valueStop = document.querySelector('.stop')

//variaveis dos modais
const closeModal = document.querySelectorAll(".close")
const modalAnswers = document.querySelector("#open-modal-answer")
const openModalAnswer = document.querySelectorAll(".open-modal-answer")
const confirmAnswer = document.querySelector('#confirm-answer')

const modalStop = document.querySelector("#open-modal-stop")
const openModalStop = document.querySelector(".open-modal-stop")
const confirmStop = document.querySelector("#confirm-stop")

//modal next question ou erro question
const openModalNextQuestion = document.querySelector("#open-modal-next-question")
const openModalIncorrectAnswer = document.querySelector("#open-modal-incorrect-answer")
const openModalWinner = document.querySelector("#open-modal-winner")
const openModalTime = document.querySelector("#open-modal-time")

// verifica se confirma a resposta ou não
openModalAnswer.forEach(e => e.onclick = () => {
    modalAnswers.style.display = "flex";
})

closeModal.forEach(e => e.onclick = () => {
    resetAnswer()
})

confirmAnswer.onclick = () => {

    if (verifyAnswer()) {
        stopTime()
        correctAnswer()
    } else {
        stopTime()
        incorrectAnswer()
    }
}

//verifica o botão 'parar
openModalStop.onclick = () => {
    modalStop.style.display = "flex";
}

confirmStop.onclick = () => {
    localStorage.setItem("mostRecentPrize", old_price)
    window.location.href = "end-game.html"
}


//espera modal next question finalizar
function correctAnswer() {
    if (drawnQuestions == maxQuestions) {
        closeConfirmAnswerModal()
        openModalWinner.style.display = "flex"
        setTimeout(() => {
            winGame()
        }, 2000)
    } else {
        openModalNextQuestion.style.display = "flex"
        closeConfirmAnswerModal()
        setTimeout(() => {
            openModalNextQuestion.style.display = "none"
            resetAnswer()
            getNewQuestion()
        }, 3000)
    }
}

function incorrectAnswer() {
    openModalIncorrectAnswer.style.display = "flex"
    localStorage.setItem("mostRecentPrize", (old_price / 2))
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
            alternative.parentElement.classList.add('answer-correct')
            alternativeSelected.parentElement.classList.add('answer-incorrect')
        }
    })
}

//inicia o jogo
startGame = () => {
    price = 0
    drawnQuestions = 0
    questionsAvailable = databaseQuestions
    getNewQuestion()
}

winGame = () => {
    localStorage.setItem("mostRecentPrize", price)
    window.location.href = "winner.html"
}

//gera uma nova questao
getNewQuestion = () => {

    //verificar se ainda existem perguntas para serem exibidas
    drawnQuestions++
    console.log(price)
    setPrice()
    timeDecrease()

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


choices.forEach(choice => {
    console.log(choice)
    choice.addEventListener('click', e => {
        alternativeSelected = e.target
        if (alternativeSelected.className != 'flex-container-alternative')
            alternativeSelected.parentElement.classList.add('answer-selected')
    })
})


//reseta a alternativa caso o jogador não confirme sua escolha
resetAnswer = () => {
    closeConfirmAnswerModal()
    choices.forEach(choice => {
        choice.classList.remove('answer-selected')
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
    price == 1000 ? valueCorrect.innerText = 1 + ' milhão' : valueCorrect.innerText = price + ' mil'
    valueStop.innerText = old_price + ' mil'
    valueIncorrect.innerText = (old_price / 2) + ' mil'

}

function setPrice() {
    if (drawnQuestions <= 5) {
        if (drawnQuestions == 1) {
            old_price = price
            price = 1
        } else {
            old_price = price
            verifyPrice()
            price++
        }
    } else if (drawnQuestions > 5 && drawnQuestions <= 10) {
        old_price = price
        verifyPrice()
        price += 10
    } else if (drawnQuestions > 10 && drawnQuestions <= 15) {
        old_price = price
        verifyPrice()
        price += 100
    } else {
        old_price = price
        verifyPrice()
        price += 1000
    }

    alterPrizeValues()
}

verifyPrice = () => {
    return price == 5 || price == 50 || price == 500 ? price = 0 : price
}

//contador regressivo do tempo

function timeDecrease() {
    if ((count - 1) >= 0) {
        if(count <= 10){
            timeLeft.classList.add('time-end')
        }
        count--
        timeLeft.innerText = count
    } else {
        timeExpired()
    }
    timer = setTimeout(timeDecrease, 1000)
}

function stopTime() {
    clearTimeout(timer)
    count = 4;
}

function timeExpired() {
    openModalTime.style.display = "flex"
    setTimeout(() => {
        openModalTime.style.display = "none"
        window.location.href = "end-game.html"
    }, 3000)
}

startGame()