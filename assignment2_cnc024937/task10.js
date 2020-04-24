
var JS = "cloudComputing";

var userPass = prompt("Please enter you password");

if (userPass === JS) {

    alert("Correct! The password you entered matches the original password");

} else if (userPass === null) {
    alert("Operation Cancelled");

} else {
    alert("Incorrect password");
}