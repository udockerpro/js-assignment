


var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B;


var userInput = prompt(`Welcome to Sweets Bakery,
What do you want to order sir/ma\'am?`);

userInput = userInput.toLowerCase();

// document.write(userInput + "<br/>");

for (i = 0; i < A.length; i++) {

    if (userInput === A[i]) {

        document.write(userInput + " is <b> available </b> at index " + 
        i + 
        " in our bakery :) <br>");

        B = userInput;
    }
}

if (B === undefined) {

    document.write("<br>We are sorry. " + 
    userInput + 
    " is <b>Not available</b> in our bakery :(<br>");
}



