const highPrizeslist = document.querySelector("#high-prizes-list")
const highPrizes = JSON.parse(localStorage.getItem("highPrizes")) || [];

highPrizeslist.innerHTML = highPrizes.map( prize => {
    return `<li>${prize.name}: R$ ${prize.prize} mil</li>`
}).join("")