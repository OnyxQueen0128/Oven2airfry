let buttonCalculate = document.querySelector(".button-calculate");
let inputTemp = document.querySelector("inputTemp");
let inputHours = document.querySelector("inputHours");
let inputMinutes = document.querySelector("inputMinutes");
let tempIndicator = document.querySelector("tempDisplay");
let hoursIndicator = document.querySelector("hoursDisplay");
let minutesIndicator = document.querySelector("minutesDisplay");

function Aifryer() {
  let newTemp = inputTemp.value - 125 / 9;
  let newHours = inputHours;
  let newMinutes = inputMinutes;

  console.log(newTemp);

  tempIndicator.value = "newTemp";
}

buttonCalculate.addEventListener("click", Aifryer);
