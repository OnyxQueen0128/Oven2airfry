let tempUnitButton = document.querySelector("#btn-converter");
let buttonCalculate = document.querySelector("#button-calculate");

let inputTemp = document.querySelector("#inputTemp");
let inputMinutes = document.querySelector("#inputMinutes");

let tempIndicator = document.querySelector("#tempDisplay");
let minutesIndicator = document.querySelector("#minutesDisplay");

let displayedUnit1 = document.querySelector("#displayedUnit1");
let displayedUnit2 = document.querySelector("#displayedUnit2");

function TempButtonToggle() {
  if (tempUnitButton.innerHTML == "°F") {
    tempUnitButton.innerHTML = "°C";
    displayedUnit1.innerHTML = "F";
    displayedUnit2.innerHTML = "F";
  } else {
    tempUnitButton.innerHTML = "°F";
    displayedUnit1.innerHTML = "C";
    displayedUnit2.innerHTML = "C";
  }
}

function Aifryer() {
  if (tempUnitButton.innerHTML == "°F") {
    AirfryerCelcius();

    console.log("hello");
  } else {
    AirfryerFarenheight();
  }

  function AirfryerFarenheight() {
    let newTemp = inputTemp.value - 25;
    let newMinutes = inputMinutes.value - inputMinutes.value * 0.2;

    tempIndicator.innerHTML = Math.round(newTemp);
    minutesIndicator.innerHTML = Math.round(newMinutes);
  }

  function AirfryerCelcius() {
    let calcTemp = inputTemp.value * (9 / 5) + 32;
    let convertedResult = calcTemp - 25;
    let newTemp = (convertedResult - 32) * (5 / 9);
    let newMinutes = inputMinutes.value - inputMinutes.value * 0.2;

    tempIndicator.innerHTML = Math.round(newTemp);
    minutesIndicator.innerHTML = Math.round(newMinutes);
  }
}

tempUnitButton.addEventListener("click", TempButtonToggle);
buttonCalculate.addEventListener("click", Aifryer);
