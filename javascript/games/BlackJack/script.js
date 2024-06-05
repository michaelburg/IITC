class Card {
  constructor(imageUrl, value) {
    this.imageBackUrl = "img/back.jpg";
    this.imageUrl = imageUrl;
    value > 10 ? (this.value = 10) : (this.value = value);
  }
}
class Deck {
  constructor() {
    this.cards = [];
    let cardNames = [
      "ace",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "jack",
      "queen",
      "king",
    ];
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 4; j++) {
        let url = `img/${cardNames[i]}-${j + 1}.png`;
        this.cards.push(new Card(url, i + 1));
      }
    }
  }
}
let playerInfo, houseInfo, deck, balance;
init();
function init() {
  deck = new Deck();
  balance = 100;
  updateBalance(0);
  shuffle(deck.cards);
  disableButtonGameEnd();
}
function updateBalance(bet) {
  balance -= bet;
  document.querySelector(".balance").innerText = `your balance: ${balance}`;
  document.querySelector(".bet").innerText = `your bet: ${bet}`;
  document.querySelector(".betInput").innerText = "";
}
function Deal() {
  bet = document.querySelector(".betInput").value;
  if (validateBetInput()) return;
  updateBalance(bet);
  resetGame();
}

function resetGame() {
  document.querySelector(".house-hand").innerHTML = "";
  document.querySelector(".player-hand").innerHTML = "";
  enableButtonGameStart();
  // document.querySelector("player-hand").innerHTML = "";
  playerInfo = { deck: [], softCount: 0, hardCount: NaN, balance: 0 };
  houseInfo = { deck: [], softCount: 0, hardCount: NaN };
  houseInfo.deck.push(dealCard(true, true));
  houseInfo.deck.push(dealCard(true));
  playerInfo.deck.push(dealCard());
  playerInfo.deck.push(dealCard());
}

function dealCard(house = false, showBack = false) {
  let player = house ? "house" : "player";
  let card = deck.cards[0];
  deck.cards.splice(0, 1);
  gridContainer = document.querySelector(`.${player}-hand`);
  const image = document.createElement("img");
  showBack ? (image.src = card.imageBackUrl) : (image.src = card.imageUrl);
  showBack ? (image.id = "hidden") : "";
  image.style.width = "100px";
  image.style.height = "150px";
  image.alt = "Image";
  gridContainer.appendChild(image);
  if (!showBack) updateCardCount(card, player);
  return card;
}
function updateCardCount(card, player) {
  if (player == "house") {
    houseInfo.softCount += card.value;
    document.querySelector(
      `.${player}-count`
    ).innerText = `count: ${houseInfo.softCount}`;
  } else {
    playerInfo.softCount += card.value;
    document.querySelector(
      `.${player}-count`
    ).innerText = `count: ${playerInfo.softCount}`;
  }
}
function Hit() {
  dealCard();
  if (playerInfo.softCount > 21) handResault();
}
function Double() {
  updateBalance(bet);
  dealCard();
  Stand();
}
function Stand() {
  hiddenCard = document.getElementById(`hidden`);
  hiddenCard.src = houseInfo.deck[0].imageUrl;
  hiddenCard.removeAttribute("id");
  houseInfo.softCount += houseInfo.deck[0].value;
  document.querySelector(
    `.house-count`
  ).innerText = `count: ${houseInfo.softCount}`;
  // gridContainer = gridContainer.querySelector(img);
  while (houseInfo.softCount < 17) {
    dealCard(true);
  }
  handResault();
}
function handResault() {
  if (playerInfo.softCount == 21 && playerInfo.deck.length == 2) blackJackWin();
  else if (houseInfo.softCount > 21) gameWon();
  else if (playerInfo.softCount > 21) gameLost();
  else houseInfo.softCount > playerInfo.softCount ? gameLost() : gameWon();
}
function disableButtonGameEnd() {
  document.getElementById("Hit").disabled = true;
  document.getElementById("Stand").disabled = true;
  document.getElementById("Double").disabled = true;
  document.getElementById("Split").disabled = true;
  document.getElementById("Deal").disabled = false;
}
function enableButtonGameStart() {
  document.getElementById("Hit").disabled = false;
  document.getElementById("Stand").disabled = false;
  document.getElementById("Double").disabled = false;
  document.getElementById("Split").disabled = false;
  document.getElementById("Deal").disabled = true;
}
function blackJackWin() {
  alert("blackjack");
  updateBalance(bet * -2.5);
  disableButtonGameEnd();
}
function gameLost() {
  alert("lost");
  updateBalance(0);
  disableButtonGameEnd();
}
function gameWon() {
  alert("won");
  updateBalance(bet * -2);
  disableButtonGameEnd();
}
function validateBetInput() {
  return bet == 0;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
