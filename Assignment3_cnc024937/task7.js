

var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var output = [];
finalArr = [];




finalArr = a;   

for (j = 0; j < b.length; j++) {                //Merged arrays             
    finalArr.push(b[j]);
}                                                    



var sample = Math.max(...finalArr);             // largest value



for (k = 0; k <= sample; k++) {                 //Serial / sorting

    for (l = 0; l < finalArr.length; l++) {

        if (k === finalArr[l]) {
            output.push(finalArr[l]);
        }
    }
}


// document.write("<br> Output is " + output);



for (i = 0; i < output.length; i++) {                       
    d = output[i]; /* 10 */

    for (j = 0; j < output.length; j++) {
        e = output.indexOf(d, (output.indexOf(d) + 1)); /*20*/

        if (d === output[e]) {
            output.splice(e, 1);
        }
    }
}




// document.write("<br> finalArr is " + finalArr);

document.write("<br><br> Output is " + output);



