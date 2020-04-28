

var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var output = [];
finalArr = [];
output = [];



for (j = 0; j < a.length; j++) {
    finalArr.push(a[j]);
}

for (j = 0; j < b.length; j++) {
    finalArr.push(b[j]);
}


var sample = Math.max(...finalArr);

document.write(sample + "<br />");

for (k = 0; k <= sample; k++) {

    for (l = 0; l < finalArr.length; l++) {

        if (k === finalArr[l]) {
            output.push(finalArr[l]);
        }
    }
}


for (i = 0; i < output.length; i++) {
    d = output[i]; /* 10 */

    for (j = 0; j < output.length; j++) {
        e = output.indexOf(d, (output.indexOf(d) + 1)); /*20*/

        if (d === output[e]) {
            output.splice(e, 1);
        }
    }
}





document.write("<br> finalArr is " + finalArr);
document.write("<br> output is " + output);
console.log(finalArr);
console.log(output);

