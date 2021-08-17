
//function for get input and clear input field

function getInputField(getInputId) {
    debugger;
    const amount = document.getElementById(getInputId);
    const amountValueText = amount.value;
    const amountValue = parseFloat(amountValueText);

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


//function for update balance 

function updateBalance(depositAmount, isAdd) {
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceText = currentBalance.innerText;
    const balance = parseFloat(previousBalanceText);


    if (isAdd) {
        previousBalance.innerText = balance + depositAmount;
    }
    else {
        previousBalance.innerText = balance - depositAmount;
    }
}


//Add event listener for deposit amount

document.getElementById('deposit-button').addEventListener('click', function () {
    const deposit = getInputField('deposit-input');
    const previousAmount = document.getElementById('deposit-total');
    const previousAmountText = previousAmount.innerText;
    const previousDepositAmount = parseFloat(previousAmountText);
    totalAmount(deposit, previousDepositAmount);
});


//Add event listener for withdraw amount 

