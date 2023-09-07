import "bootstrap";
import "./style.css";

// Generate new card
window.onload = generateNewCard();

function generateNewCard() {
  const cardNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  const cardNumber = document.getElementById("cardNumber");
  cardNumber.innerHTML = cardNum[Math.floor(Math.random() * 12)];

  const suit = ["heart", "diamond", "spade", "club"];
  const newSuit = suit[Math.floor(Math.random() * 4)];

  const top = document.querySelector(".header");
  top.className = "";
  top.classList.add("header", newSuit);

  const bottom = document.querySelector(".footer");
  bottom.className = "";
  bottom.classList.add("footer", newSuit);

  if (newSuit == "heart" || newSuit == "diamond") {
    cardNumber.style.color = "red";
  } else {
    cardNumber.style.color = "black";
  }
}

const btn = document.getElementById("button");
btn.addEventListener("click", generateNewCard);

// Add timer and buttons
const startBtn = document.getElementById("autoStart");
const stopBtn = document.getElementById("autoStop");

var timer;
let isgoing = false;

function start() {
  if (isgoing == false) {
    timer = setInterval(generateNewCard, 10000);
    isgoing = true;
  }
}

function stop() {
  if (isgoing == true) {
    clearInterval(timer);
    isgoing = false;
  }
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);

//Adjust card height and width
const cardHeight = document.getElementById("cardHeight");
const cardWidth = document.getElementById("cardWidth");
const card = document.getElementById("card");

cardHeight.addEventListener("keydown", event => {
  if (event.keyCode === 13) {
    changeHeight();
    event.target.value = "";
  }
});

cardWidth.addEventListener("keydown", event => {
  if (event.keyCode === 13) {
    changeWidth();
    event.target.value = "";
  }
});

function changeHeight() {
  let newHeight = cardHeight.value;
  card.style.height = `${newHeight}px`;
}

function changeWidth() {
  let newWidth = cardWidth.value;
  card.style.width = `${newWidth}px`;
}

//Reset card size
const resetBtn = document.getElementById("resetCard");
resetBtn.addEventListener("click", resetCard);

function resetCard() {
  card.style.height = "525px";
  card.style.width = "375px";
  card.style.backgroundColor = "white";
  bgColorSelect.value = "default";
}

//Change card background
const bgColorSelect = document.getElementById("bgColorSelect");
bgColorSelect.addEventListener("change", changeBackground);

function changeBackground() {
  let newBackground = bgColorSelect.value;
  card.style.backgroundColor = newBackground;
}
