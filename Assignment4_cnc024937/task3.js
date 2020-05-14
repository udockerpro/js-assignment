



// // Pasword for practice = xyZ12345

// var user1Pass;

// for (i = 0; user1Pass == undefined; i++) {
//     user1Pass = prompt(`
// Please insert a valid password
// for character codes of a-z, A-Z & 0-9` );

//     /*Checking length*/
//     if (user1Pass.length < 8) {
//         alert("Password atleast 8 characters long ");
//         user1Pass = undefined;
//         continue;

//         /*Checking the first value Number is not allowed*/
//     } else if (user1Pass.charAt(0) >= 0 | user1Pass.charAt(0) < 10) {
//         alert("It should not start with number ");
//         user1Pass = undefined;
//         continue;

//     }

//     /*Checking the numeric value atleast 1 Number*/
//     var b;
//     for (i = 1; i < user1Pass.length; i++) {
//         b = user1Pass.charAt(i);
//         if (b - b == 0) {
//             // alert("Now i is " + b + " Numeric value available here.");
//             break;
//         } else if (i == (user1Pass.length - 1) & b != 0) {
//             console.log(i);
//             alert("Insert Atleast One Numeric Value");
//             user1Pass = undefined;
//             continue;
//         }
//     }


//     /*It should contain alphabets and numbers*/
//     var abcABC123 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

//     var d;
//     var e;

//     for (i = 0; i < user1Pass.length; i++) {
//         d = user1Pass.charAt(i);
//         // console.log(d);
//         e = abcABC123.indexOf(d);

//         if (e == -1) {
//             alert("It should contain alphabets and numbers");
//             user1Pass = undefined;
//             break;
//         }

//     }

// }

// console.log("Length of password " + user1Pass.length);
// console.log("User1Pass is " + user1Pass);

var validPass = false;

for (i = 0; validPass === false; i++) {
    var user1Pass = prompt("Please Enter a valid password");

    if (user1Pass == null | user1Pass == "") {

        alert("Operation Cancelled");
        break;
    }



    // Checking the first value Number Not allowed
    var firstVal = user1Pass.charAt(0) - user1Pass.charAt(0);
    // console.log(firstVal);

    if (firstVal === 0) {
        alert("It should not start with number ");
        validPass = false;
        continue;
    }
    else {
        validPass = true;
    }


    // Checking the length minimum 8 characters
    if (user1Pass.length < 8) {
        alert("Password atleast 8 characters long");
        validPass = false;
        continue;
    }
    else {
        validPass = true;
    }


    // checking the numeric value atleast 1 character
    for (j = 0; j < user1Pass.length; j++) {

        let findNum = user1Pass.charAt(j);

        if (findNum >= 0 | findNum < 10) {

            validPass = true;
            break;
        }
        else if (j === user1Pass.length - 1) {
            alert("Atleast any one Number");
            validPass = false;
            break;
        }
    }




    // Checking the password It should contain alphabets and Numbers

    var abcABC123 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

    for (k = 0; k < user1Pass.length & validPass == true; k++) {

        var findSame = abcABC123.indexOf(user1Pass.charAt(k));

        if (findSame === -1) {
            alert("It should contain alphabets and Numbers");
            validPass = false;
            break;
        }
    }


}

console.log("User password is: " + user1Pass);

