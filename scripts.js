function calculate(operation) {
    var num1 = parseFloat(document.getElementById('input1').value);
    var num2 = parseFloat(document.getElementById('input2').value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Invalid input';
    } else {
        if (operation === '+') {
            result = num1 + num2;
        } else if (operation === '-') {
            result = num1 - num2;
        } else if (operation === '*') {
            result = num1 * num2;
        } else if (operation === '/') {
            result = num1 / num2;
        } else {
            result = 'Invalid operation';
        }
    }

    document.getElementById('output').textContent = result;
}