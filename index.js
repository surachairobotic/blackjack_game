let cards = []
let sum = 0

console.log(sum)
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let message = ""

let hasBlackJack = false
let isAlive = true

let player = {
    name: "Prayuth",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    hasBlackJack = false
    isAlive = true

    player.chips -= 5
    if (player.chips <= 0) {
        player.chips = 0
        isAlive = false
        message = "You're out of money!"
        messageEl.textContent = message
    } else {
        playerEl.textContent = player.name + ": $" + player.chips
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = cards[0] + cards[1]
        renderGame()    
    }
}

function getRandomCard() {
    num = parseInt(Math.random() * 13) + 1
    if (num === 1) {
        num = 11
    } else if (num > 10) {
        num = 10
    }
    return num
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + "  "
    }
    sumEl.textContent = "Sum: " + sum 
    if (sum < 21) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }    
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!")
        let newCard = getRandomCard()
        cards.push(newCard)
        sum = cards.reduce((a, b) => a + b, 0);
        console.log(sum)
        renderGame()    
    }
}
