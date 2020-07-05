const playerName = document.getElementById("player")
const buttonSave = document.getElementById("save")
const reward = document.querySelector(".reward")

//inicia array na primeira vez e depois armazena os valores
const mostRecentPrize = localStorage.getItem("mostRecentPrize")
const highPrizes = JSON.parse(localStorage.getItem("highPrizes")) || []

mostRecentPrize == 1000 ? reward.innerText = "Parabéns ! Você ganhou R$ 1 milhão !"
    : reward.innerText = 'Você ganhou: R$ ' + mostRecentPrize + ' mil'

playerName.addEventListener("keyup", () => {
    buttonSave.disabled = !playerName.value
})

savePrize = e => {
    e.preventDefault()
    if (playerName.value !== null && playerName.value !== '') {

        const prize = {
            prize: mostRecentPrize,
            name: playerName.value
        }

        highPrizes.push(prize)

        highPrizes.sort((a, b) => b.prize - a.prize)

        highPrizes.splice(3);

        localStorage.setItem("highPrizes", JSON.stringify(highPrizes))
        window.location.assign('index.html')
    }
}