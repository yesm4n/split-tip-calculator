"use strict";

// Naming variables
const bill = document.getElementById("bill");
const billBorder = document.querySelector(".bill__text");
const customTip = document.getElementById("custom");
const numberOfPeople = document.getElementById("number-of-people");
const resetButton = document.getElementById("reset");
const buttons = document.querySelectorAll(".btn-selector");
const perPersonResults = document.querySelector(".amount");
const totalResults = document.querySelector(".total");
const peopleLabel = document.querySelector(".people__label");
const textError = document.querySelector(".text__error");

// Success output
function successMsg() {
  billBorder.style.border = "1px hsl(172, 67%, 45%) solid";
  peopleLabel.style.border = "";
  textError.style.display = "none";
}
// Error output
function errMsg() {
  peopleLabel.style.border = "1px hsl(0, 50%, 50%) solid";
  textError.style.display = "unset";
}

// Calculations for the selected tip %
function getPercentage() {
  // Selecting all the buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      let clickHandle = this.value;
      // Checking if values are not numbers
      if (!Number(bill.value) && !Number(numberOfPeople.value)) {
        errMsg();
      } else if (numberOfPeople.value == 0) {
        errMsg();
      } else if (customTip.value) {
        successMsg();
        // Custom tip calculations
        perPersonResults.textContent = `$${
          (bill.value * (customTip.value / 100)) / numberOfPeople.value
        }`;
        totalResults.textContent = `$${bill.value * (customTip.value / 100)}`;
      } else if (clickHandle) {
        successMsg();
        // Buttons percentage calculations
        totalResults.textContent = `$${Math.floor(bill.value * clickHandle)}`;
        perPersonResults.textContent = `$${Math.floor(
          (bill.value * clickHandle) / numberOfPeople.value
        )}`;
      } else {
        console.error();
        console.log("error");
      }
    });
  }
}

getPercentage();

// Reseting the calculator
resetButton.addEventListener("click", function () {
  window.location.reload();
});
