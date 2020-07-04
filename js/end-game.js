const playerName = document.querySelector("#player")
const buttonSave = document.querySelector("#save")
// const recentPrizes = document.querySelector("#")

//inicia array na primeira vez e depois armazena os valores
const mostRecentPrize = localStorage.getItem("mostRecentPrize");
const highPrizes = JSON.parse(localStorage.getItem("highPrizes")) || [];

playerName.addEventListener('keyup', () => {
    buttonSave.disabled = !playerName.value
})

savePrize = e => {
    e.preventDefault()

    const prize = {
        prize: mostRecentPrize,
        name: playerName.value
    };

    highPrizes.push(prize);

    highPrizes.sort((a,b) => b.prize - a.prize)

    highPrizes.splice(3);

    localStorage.setItem("highPrizes", JSON.stringify(highPrizes));

    window.location.assign('index.html')
}