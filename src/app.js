import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
const palos = ["♦","♥","♠","♣"]

window.onload = function() {
  function randomCards(arr){
    let randObject = arr[Math.floor(Math.random()*arr.length)]
    return randObject
  }

  let cardValue = document.querySelector("#cardValue")
  let paloT = document.querySelector("#paloT")
  let paloB = document.querySelector("#paloB")

  cardValue.innerHTML = randomCards(values)
  let newPalo = randomCards(palos)
  paloT.innerHTML = newPalo;
  paloB.innerHTML = newPalo;
  if (newPalo=== "♥" || newPalo === "♦" ) {
    paloT.classList.add('reds');
    paloB.classList.add('reds');
  }

};