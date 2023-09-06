/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// const btn = document.getElementById("btn");

window.onload = function() {
  const cardNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  const newCardNumber = document.createElement("h1");
  newCardNumber.innerHTML = cardNum[Math.floor(Math.random() * 12)];
  document.querySelector(".number").appendChild(newCardNumber);

  const suit = ["heart", "spade", "club", "diamond"];
  const newSuit = suit[Math.floor(Math.random() * 4)];
  const top = document.querySelector(".header");
  top.classList.add(newSuit);

  const bottom = document.querySelector(".footer");
  bottom.classList.add(newSuit);
};
