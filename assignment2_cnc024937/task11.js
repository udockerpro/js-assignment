


var timeMessage = prompt("Enter current time");

if (timeMessage >= 0000 && timeMessage < 1200) {
    alert("Good Morning");

} else if (timeMessage >= 1200 && timeMessage < 1700) {
    alert("Good afternoon");

} else if (timeMessage >= 1700 && timeMessage < 2100) {
    alert("Good evening");

} else if (timeMessage >= 2100 && timeMessage <= 2359) {
    alert("Good night");

} else {
    alert("Enter valid time");
}