let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-amount");
let checkButton = document.querySelector("#button");
let message = document.querySelector("#error-message");
let noOfNotes = document.querySelectorAll(".no-of-notes");

let availableNotes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();

  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    let numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    amountToBeReturned = amountToBeReturned % availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
