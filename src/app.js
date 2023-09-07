/* eslint-disable */
import "bootstrap";
import "./style.css";

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
