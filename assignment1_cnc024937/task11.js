

// 11. The Temperature Converter: It’s hot out! Let’s make a converter
// based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “N​ o​ C is N​ o​ F”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “N​ o​ F is N​ o​ C”.
// Conversion Formulae:


var cToF = 25;
document.write(cToF + "<sup>0</sup>C is ");

cToF = (cToF * 9 / 5) + 32;
document.write(cToF + "<sup>o</sup>F <br>");


var fToC = 70;
document.write(fToC + "<sup>0</sup>F is ");

fToC = (fToC - 32) * 5 / 9;
document.write(fToC + "<sup>o</sup>C <br>");
