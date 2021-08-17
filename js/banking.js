
//function for get input and clear input field

function getInputField(getInputId) {
    const amount = document.getElementById(getInputId);
    const amountValue = amount.value;

    amount.value = '';
    return amountValue;
}

//function for total amount (deposit and withdraw)

function totalAmount(textFieldId, currentAmount) {
    const previousTotalAmount = document.getElementById(textFieldId);
    const previousAmount = previousTotalAmount.innerText;
    const previousTotal = parseFloat(previousAmount);

    const total = previousTotal + currentAmount;

    previousTotalAmount.innerText = total;
}