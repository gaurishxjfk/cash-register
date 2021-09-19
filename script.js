const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-msg");

const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateAmount() {
    hideMessage();
    if (billAmount.value <= 0) {
        showMessage("Invalid Amount");
    } else {
        if (Number(billAmount.value) > Number(cashGiven.value)) {
            showMessage(" Cash given is less.");
        } else {
            const amountToReturn = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToReturn);
        }
    }
});
function hideMessage() {
    errorMsg.style.display = "none";
}
function showMessage(msg) {
    errorMsg.style.display = "block";
    errorMsg.innerText = msg;
}

function calculateChange(amount) {
    for (let i = 0; i < availableNotes.length; i++) {
        var nosOfNotes = Math.trunc(amount / availableNotes[i]);
        amount %= availableNotes[i];
        noOfNotes[i].innerText = nosOfNotes;
    }

}