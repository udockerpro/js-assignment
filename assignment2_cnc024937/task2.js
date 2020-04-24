

var signal = prompt("Color of traffic signal (use lowercase)", "Enter here");

if (signal === "red") {
    alert("Must Stop");

} else if (signal === "yellow") {
    alert("Ready to Move");

} else if (signal === "green") {
    alert("Move now");

} else {
    alert("Try Again later");
}