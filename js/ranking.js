const highPrizeslist = document.querySelector("#high-prizes-list")
const highPrizes = JSON.parse(localStorage.getItem("highPrizes")) || [];

highPrizeslist.innerHTML = highPrizes.map( prize => {
    if (prize.prize == 1000){
        return `<li>${prize.name}: R$ 1 milhão</li>`
    }else {
        return `<li>${prize.name}: R$ ${prize.prize} mil</li>`
    }
}).join("")