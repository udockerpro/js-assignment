

// 12. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to
// convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression. (Exchange rates : 1 US Dollar =
// 155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)


document.write("<h1> Currency in PKR </h1>  <br><br>");

var dollar = 155;
var sRiyal = 41;

var pkr = (dollar * 10) + (sRiyal * 25);
document.write("Total currency in PKR: " + pkr);



