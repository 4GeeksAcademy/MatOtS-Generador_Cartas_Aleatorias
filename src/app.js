import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const palos = ["♦", "♥", "♠", "♣"]

window.onload = function () {
  let cardValue = document.querySelector("#cardValue")
  let paloT = document.querySelector("#paloT")
  let paloB = document.querySelector("#paloB")


  changeValues();

  const intervalID = setInterval(changeValuesInterval, 10000);

  function changeValuesInterval() {
    changeValues();
  }

};


window.randomCards = function (arr) {
  let randObject = arr[Math.floor(Math.random() * arr.length)]
  return randObject
}

window.changeValues = function () {

  cardValue.innerHTML = randomCards(values)
  let newPalo = randomCards(palos)
  paloT.innerHTML = newPalo;
  paloB.innerHTML = newPalo;
  if (newPalo === "♥" || newPalo === "♦") {
    paloT.classList.add('text-danger');
    paloB.classList.add('text-danger');
  }
}

window.changeSize = function() {
  let width = document.querySelector("#widthInput")
  let height = document.querySelector("#heightInput")
  let cardItem = document.querySelector("#cardItem")

  cardItem.style.width = width.value + "px"
  cardItem.style.height = height.value + "px"
  console.log("esto es width ",width)
  console.log("esto es width ",width)
}