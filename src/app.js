import "bootstrap";
import "./style.css";

//create all variables
const btn = document.getElementById("button");
const startBtn = document.getElementById("autoStart");
const stopBtn = document.getElementById("autoStop");
const resetBtn = document.getElementById("resetCard");

const card = document.getElementById("card");
const cardHeight = document.getElementById("cardHeight");
const cardWidth = document.getElementById("cardWidth");

const bgColorSelect = document.getElementById("bgColorSelect");

let timer;
let isgoing = false;

//create all functions
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

function changeHeight() {
  let newHeight = cardHeight.value;
  card.style.height = `${newHeight}px`;
}

function changeWidth() {
  let newWidth = cardWidth.value;
  card.style.width = `${newWidth}px`;
}

function changeBackground() {
  let newBackground = bgColorSelect.value;
  card.style.backgroundColor = newBackground;
}

function resetCard() {
  card.style.height = "525px";
  card.style.width = "375px";
  card.style.backgroundColor = "white";
  bgColorSelect.value = "default";
}

//create all events
window.onload = generateNewCard();

btn.addEventListener("click", generateNewCard);
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", resetCard);

bgColorSelect.addEventListener("change", changeBackground);

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
