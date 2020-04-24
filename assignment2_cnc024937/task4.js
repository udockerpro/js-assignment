
var english = Number(prompt("English Marks"));

var maths = Number(prompt("Maths Marks"));

var computer = Number(prompt("Computer Marks"));

var obtainedMarks = (english + maths + computer);

var percentage = obtainedMarks / 3;


if (percentage > 100) {
    document.write("Try again");

} else if (percentage >= 80) {
    document.write("Total Marks : " + 300 + "<br>");
    document.write("Obtained Marks : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "%<br>");
    document.write("Grade : A-one" + "<br>");
    document.write("Remarks : Excellent <br>");

} else if (percentage >= 70) {
    document.write("Total Marks : " + 300 + "<br>");
    document.write("Obtained Marks : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "%<br>");
    document.write("Grade : A" + "<br>");
    document.write("Remarks : Good <br>");

} else if (percentage >= 60) {
    document.write("Total Marks : " + 300 + "<br>");
    document.write("Obtained Marks : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "%<br>");
    document.write("Grade : B" + "<br>");
    document.write("Remarks : You need to mprove <br>");
    
} else {
    document.write("Total Marks : " + 300 + "<br>");
    document.write("Obtained Marks : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "%<br>");
    document.write("Grade : Fail" + "<br>");
    document.write("Remarks : Sorry <br>");
}

