


a = [20, 53, 78, 4, 91, 12];

var value = [];
var large = [];

var output = [];

        // finding largest value first Step 1 //

for (i = 0; i < a.length; i++) {
    value = a[i];

    if (large == undefined) {
        large.push(a[i]);

    } else if (value > large) {
        large = value
    }
}
// document.write("Array items: " + a + "<br>")
console.log("The largest number is " + large );


        // sorting array Step 2 //

for (i = 0; i <= large; i++) {   

    for (j = 0; j < a.length; j++) {

        if (i === a[j]) {
            output.push(a[j]);
        }
    }
}


document.write("<br> The Output is " + output);