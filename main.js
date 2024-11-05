let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').innerText = displayValue;
    } catch (error) {
        document.getElementById('display').innerText = 'Erro';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}
