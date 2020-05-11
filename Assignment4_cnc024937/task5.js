

var userNumber = prompt("Number");



var roundValue = Math.round(userNumber);
var floorValue = Math.floor(userNumber);
var ceilValue = Math.ceil(userNumber);



if (roundValue) {

    document.write("<br>number : " + userNumber);
    document.write("<br>round off value : " + roundValue);
    document.write("<br>floor value : " + floorValue);
    document.write("<br>ceil value : " + ceilValue);
}
else {
    document.write("Only Number allowed");
}

console.log(userNumber);

