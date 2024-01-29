let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-amount");
let checkButton = document.querySelector("#button");
let message = document.querySelector("#error-message");
let noOfNotes = document.querySelectorAll(".no-of-notes");

let availableNotes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();

  const billAmountValue = parseFloat(billAmount.value);
  const cashGivenValue = parseFloat(cashGiven.value);

  if (billAmountValue > 0 && !isNaN(billAmountValue) && cashGivenValue >= billAmountValue) {
    const amountToBeReturned = cashGivenValue - billAmountValue;
    calculateChange(amountToBeReturned);
  } else if (isNaN(billAmountValue) || billAmountValue <= 0) {
    showMessage("Invalid Bill Amount");
    clearTable(); // Add this line to clear the table when the bill amount is invalid
  } else {
    showMessage("Do you wanna wash plates?");
    clearTable(); // Add this line to clear the table when "Do you wanna wash plates?" is displayed
  }
});

function clearTable() {
  // Add code here to clear the table, e.g., set the innerText of noOfNotes elements to ""
  noOfNotes.forEach(note => {
    note.innerText = "";
  });
}



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
