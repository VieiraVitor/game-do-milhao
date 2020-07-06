const maxQuestions = 16
let drawnQuestions = 0
let questionSelected = {}
let questionsAvailable = []
let alternativeSelected
let prize = 0
let count = 61

// Perguntas e Respostas
const question = document.querySelector('#question')
const alternatives = document.querySelectorAll('.answer')
const choices = Array.from(document.getElementsByClassName("flex-container-alternative"))

// Tempo Restante
const timeLeft = document.querySelector('.time-left')

// Valores possíveis de ganho
const valueCorrect = document.querySelector('.correct')
const valueIncorrect = document.querySelector('.incorrect')
const valueStop = document.querySelector('.stop')

// Janelas Modal
const closeModal = document.querySelectorAll(".close")

const modalAnswers = document.querySelector("#open-modal-answer")
const openModalAnswer = document.querySelectorAll(".open-modal-answer")
const confirmAnswer = document.querySelector('#confirm-answer')

const modalStop = document.querySelector("#open-modal-stop")
const openModalStop = document.querySelector(".open-modal-stop")
const confirmStop = document.querySelector("#confirm-stop")

const openModalNextQuestion = document.querySelector("#open-modal-next-question")
const openModalIncorrectAnswer = document.querySelector("#open-modal-incorrect-answer")
const openModalWinner = document.querySelector("#open-modal-winner")

const openModalTime = document.querySelector("#open-modal-time")

// Iniciar o jogo
startGame = () => {
    prize = 0
    drawnQuestions = 0
    questionsAvailable = databaseQuestions
    getNewQuestion()
}

// Vencer o jogo
winGame = () => {
    localStorage.setItem("mostRecentPrize", prize)
    window.location.href = "end-game.html"
}

// Gerar nova pergunta
getNewQuestion = () => {
    drawnQuestions++
    setPrize()
    timeDecrease()

    // Sortear uma questao pelo índice
    const drawnQuestion = Math.floor(Math.random() * questionsAvailable.length)
    questionSelected = questionsAvailable[drawnQuestion]
    question.innerText = questionSelected.question

    alternatives.forEach(alternative => {
        const alternativeNumber = alternative.dataset['id']
        alternative.innerText = questionSelected['alternative' + alternativeNumber]
    })

    questionsAvailable.splice(drawnQuestion, 1)
}

// Marcar a resposta selecionada
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        alternativeSelected = e.target
        if (alternativeSelected.className != 'flex-container-alternative')
            alternativeSelected.parentElement.classList.add('answer-selected')
    })
})

// Abrir modal de confirmação ao clicar em uma resposta
openModalAnswer.forEach(e => e.onclick = () => {
    modalAnswers.style.display = "flex"
})

// Reseta a marcação e fecha o modal caso o jogador não confirme sua escolha
closeModal.forEach(e => e.onclick = () => {
    resetAnswer()
})

resetAnswer = () => {
    closeConfirmAnswerModal()
    choices.forEach(choice => {
        choice.classList.remove('answer-selected')
    })
}

closeConfirmAnswerModal = () => {
    modalAnswers.style.display = "none"
    modalStop.style.display = "none"
}

// Confirma a resposta selecionada
confirmAnswer.onclick = () => {
    if (verifyAnswer()) {
        stopTime()
        correctAnswer()
    } else {
        stopTime()
        incorrectAnswer()
    }
}

// Verifica a resposta
verifyAnswer = () => {
    return questionSelected.answer == alternativeSelected.dataset['id'] ? true : false
}

// Resposta correta
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

// Resposta incorreta
function incorrectAnswer() {
    openModalIncorrectAnswer.style.display = "flex"
    localStorage.setItem("mostRecentPrize", (old_prize / 2))
    closeConfirmAnswerModal()
    markCorrectAnswer()
    setTimeout(() => {
        openModalNextQuestion.style.display = "none"
        window.location.href = "end-game.html"
    }, 3000)
}

// Marca resposta correta
function markCorrectAnswer() {
    alternatives.forEach(alternative => {
        if (questionSelected.answer == alternative.dataset['id']) {
            alternative.parentElement.classList.add('answer-correct')
            alternativeSelected.parentElement.classList.add('answer-incorrect')
        }
    })
}

// Altera os valores dos prêmios
function setPrize() {
    if (drawnQuestions <= 5) {
        if (drawnQuestions == 1) {
            old_prize = prize
            prize = 1
        } else {
            old_prize = prize
            verifyPrize()
            prize++
        }
    } else if (drawnQuestions > 5 && drawnQuestions <= 10) {
        old_prize = prize
        verifyPrize()
        prize += 10
    } else if (drawnQuestions > 10 && drawnQuestions <= 15) {
        old_prize = prize
        verifyPrize()
        prize += 100
    } else {
        old_prize = prize
        verifyPrize()
        prize += 1000
    }

    alterPrizeValues()
}

alterPrizeValues = () => {
    prize == 1000 ? valueCorrect.innerText = 1 + ' milhão' : valueCorrect.innerText = prize + ' mil'
    valueStop.innerText = old_prize + ' mil'
    valueIncorrect.innerText = (old_prize / 2) + ' mil'
}

verifyPrize = () => {
    return prize == 5 || prize == 50 || prize == 500 ? prize = 0 : prize
}

// Abrir modal para desistir do jogo
openModalStop.onclick = () => {
    modalStop.style.display = "flex"
}

confirmStop.onclick = () => {
    localStorage.setItem("mostRecentPrize", old_prize)
    window.location.href = "end-game.html"
}

// Contador regressivo do tempo restante
function timeDecrease() {
    if ((count - 1) >= 0) {
        if(count <= 10){
            timeLeft.classList.add('time-end')
        }else {
            timeLeft.classList.remove('time-end')
        }
        count--
        timeLeft.innerText = count
    } else {
        timeExpired()
    }
    timer = setTimeout(timeDecrease, 1000)
}

// Reseta o tempo
function stopTime() {
    clearTimeout(timer)
    count = 61
}

function timeExpired() {
    openModalTime.style.display = "flex"
    localStorage.setItem("mostRecentPrize", (old_prize / 2))
    setTimeout(() => {
        openModalTime.style.display = "none"
        window.location.href = "end-game.html"
    }, 3000)
}

// Base com as perguntas e as respostas
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
    {
        question: 'Qual das alternativas abaixo apenas contêm classes de palavras?',
        alternative1: 'Vogais, semivogais e consoantes',
        alternative2: 'Artigo, verbo transitivo e verbo intransitivo',
        alternative3: 'Fonologia, Morfologia e Sintaxe',
        alternative4: 'Substantivo, verbo e preposição',
        answer: 4
    },
    {
        question: 'Qual a montanha mais alta do Brasil?',
        alternative1: 'Pico da Neblina',
        alternative2: 'Pico Paraná',
        alternative3: 'Monte Roraima',
        alternative4: 'Pico Maior de Friburgo',
        answer: 1
    },
    {
        question: 'Qual a velocidade da luz?',
        alternative1: '300 000 000 metros por segundo (m/s)',
        alternative2: '150 000 000 metros por segundo (m/s)',
        alternative3: '199 792 458 metros por segundo (m/s)',
        alternative4: '299 792 458 metros por segundo (m/s)',
        answer: 4
    },
    {
        question: 'Em qual local da Ásia o português é língua oficial?',
        alternative1: 'Índia',
        alternative2: 'Filipinas',
        alternative3: 'Moçambique',
        alternative4: 'Macau',
        answer: 4
    },
    {
        question: '“It is six twenty ou twenty past six”. Que horas são em inglês?',
        alternative1: '12:06',
        alternative2: '6:20',
        alternative3: '2:20',
        alternative4: '6:02',
        answer: 2
    },
    {
        question: 'Quem é o autor de “O Príncipe”?',
        alternative1: 'Maquiavel',
        alternative2: 'Antoine de Saint-Exupéry',
        alternative3: 'Montesquieu',
        alternative4: 'Thomas Hobbes',
        answer: 1
    },
    {
        question: 'Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?',
        alternative1: 'Eu caibo',
        alternative2: 'Ele cabe',
        alternative3: 'Que eu caiba',
        alternative4: 'Eu cabo',
        answer: 1
    },    
]

// Iniciar o jogo
startGame()