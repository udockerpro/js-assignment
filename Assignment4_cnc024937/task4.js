

var userMail = prompt("Please enter your emial address");

var abc = "abcdefghijklmnopqrstuvwxyz";

var emailSaved = true;



// checking @ sign in userMail
var b = userMail.indexOf("@");

if (b == -1) {
    alert("Enter valid email");
    console.log("@ sign not entered");
    emailSaved = false;
}


// Checking the character before @
if (userMail != undefined) {
    let charB4 = userMail.indexOf("@");


    for (i = 0; i <= charB4; i++) {
        let q = userMail.charAt(i); /* p */
        let r = abc.indexOf(q);

        if (r != -1) {
            break;
        }
        else if (i == charB4 & r == -1) {
            alert("Enter a valid email");
            console.log("Not enterd atleast 1 charater before @");
            emailSaved = false;
        }
    }
}



// Checking . dot after @ in userMail

var atTherate = userMail.indexOf("@"); /* 5 */
var dot = userMail.indexOf(".", atTherate);

if (dot == -1) {
    alert("Enter a valid email");
    console.log(". dot is not entered after @");
    emailSaved = false;
}



// checking the character after @ sign

for (i = 0; i < abc.length; i++) {

    let charVal = abc.charAt(i);
    let charAfter = userMail.indexOf(charVal, atTherate);

    if (charAfter != -1) {
        break;
    }
    else if (charAfter === -1 & i === (abc.length - 1)) {
        console.log("Character not found after @");
        emailSaved = false;
        break;

    }

}


if (emailSaved == true) {
    document.write("User email is saved succesfully <br     />" + userMail);

}
else if (emailSaved == false) {
    document.write("User email not saved ");
}






