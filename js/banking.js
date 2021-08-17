
//function for get input and clear input field

function getInputField(getInputId) {
    const amount = document.getElementById(getInputId);
    const amountValue = amount.value;

    amount.value = '';
    return amountValue;
}