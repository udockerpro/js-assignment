
var firstNumber = parseFloat(prompt("First Number "));
var secondNumber = parseFloat(prompt("Second Number "));
var operation = prompt("Operation sign ");
var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
    alert("Result is " + firstNumber + " + " + secondNumber + " = " + result);

} else if (operation === "-") {
    result = firstNumber - secondNumber;
    alert("Result is " + firstNumber + " - " + secondNumber + " = " + result);

} else if (operation === "*") {
    result = firstNumber * secondNumber;
    alert("Result is " + firstNumber + " * " + secondNumber + " = " + result);

} else if (operation === "/") {
    result = firstNumber / secondNumber;
    alert("Result is " + firstNumber + " / " + secondNumber + " = " + result);

} else if (operation === "%") {
    result = firstNumber % secondNumber;
    alert("Result is " + firstNumber + " % " + secondNumber + " = " + result);

} else {
    alert("Something wrong!");
}
