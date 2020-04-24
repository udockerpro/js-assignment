
var secretNumber = 7;
var userGuess = parseInt(prompt("Guess the Number, 1 to 10"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct Answer");

} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer");

}
else {
    alert("Sorry! Try again");

}

// alert("Secret Number is " + secretNumber);
// alert("User Guess is " + userGuess);