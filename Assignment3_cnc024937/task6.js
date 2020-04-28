
var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];

for (i = 0; i < aCities.length -1 ; i++) {
    document.write((i + 1) + (o[i + 1]) + " choice is " + aCities[i] + "<br>");
}