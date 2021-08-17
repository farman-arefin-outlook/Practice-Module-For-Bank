
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

    previousTotalAmount.innerText = previousTotal + currentAmount;
}
//function get current balance

function getCurrentBalance() {
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceText = currentBalance.innerText;
    const balance = parseFloat(previousBalanceText);

    return balance;
}

//function for update balance 

function updateBalance(depositAmount, isAdd) {
    const currentBalance = document.getElementById('balance-total');

    const balance = getCurrentBalance();
    if (isAdd == true) {
        currentBalance.innerText = balance + depositAmount;
    }
    else {
        currentBalance.innerText = balance - depositAmount;
    }
}


//Add event listener for deposit amount

document.getElementById('deposit-button').addEventListener('click', function () {
    const deposit = getInputField('deposit-input');

    totalAmount('deposit-total', deposit);
    updateBalance(deposit, true);
});


//Add event listener for withdraw amount 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdraw = getInputField('withdraw-input');
    totalAmount('withdraw-total', withdraw);
    updateBalance(withdraw, false);
});



