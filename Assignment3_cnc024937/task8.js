


/*task8-a start*/

var Counting = [];

for (i = 1; i <= 15; i++) {
    Counting.push(" " + i);
}
document.write("<br>a. Counting: " + Counting);



/*task8-b start*/

var ReverseCounting = [];

for (j = 10; j >= 1; j--) {

    ReverseCounting.push(" " + j);
}
document.write("<br><br>b. Reverse counting: " + ReverseCounting);



/*task8-c start*/

var sample;
var even = [];
for (k = 0; k <= 20; k++) {
    sample = k % 2;

    if (sample === 0) {
        even.push(" " + k);
    }
}
document.write("<br><br>c.  Even: " + even);



/*task8-d start*/

var odd = [];
var sampleOdd;

for (l = 0; l < 20; l++) {
    sampleOdd = l % 2;

    if (sampleOdd === 1) {
        odd.push(" " + l);
    }
}
document.write("<br><br>d.  Odd: " + odd);



/*task8-e start*/

var sampleSeries = 2000;
// var series = [];
var Sr = [];

for (m = 0; m <= 20000; m++) {

    if (m === sampleSeries) {
        // series.push(" " + m);

        Sr.push(" " + m / 100 / 10 + "k");

        sampleSeries = sampleSeries + 2000;
    }
}


document.write("<br><br>e. Series: " + Sr);