
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

document.write(arr1 + "<br> <br>");

var d = [];
var e = [];

for (i = 0; i < arr1.length; i++) {
    d = arr1[i];                                        /* 3 */

    for (j = 0; j < arr1.length; j++) {
        e = arr1.indexOf(d, (arr1.indexOf(d) + 1));     /* 5 */  /* 7 */  /* 12 */
        
        if (d === arr1[e]) {
            arr1.splice(e, 1);                          /*removing element*/
        }
    }
}


document.write(arr1 + " <br>  ");
