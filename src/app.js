/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = generateNewCard();

function generateNewCard() {
  const cardNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  const cardNumber = document.getElementById("cardNumber");
  cardNumber.innerHTML = cardNum[Math.floor(Math.random() * 12)];

  const suit = ["heart", "spade", "club", "diamond"];
  const newSuit = suit[Math.floor(Math.random() * 4)];

  const top = document.querySelector(".header");
  top.className = "";
  top.classList.add("header", newSuit);

  const bottom = document.querySelector(".footer");
  bottom.className = "";
  bottom.classList.add("footer", newSuit);
}

const btn = document.getElementById("button");
btn.addEventListener("click", generateNewCard);

setInterval(generateNewCard, 10000);
