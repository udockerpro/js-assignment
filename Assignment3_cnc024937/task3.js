



var colors = ["Red", "Yellow"];

for (a = 0; a < colors.length; a++) {
    document.write(colors[a] + "<br>");
}

// Task 3-1

colors.unshift(prompt(
    `Enter color name on Top 
` + colors));


document.write("<br> User added color on top <br>");
document.write("Now colors Length is " + colors.length + "<br>");

for (b = 0; b < colors.length; b++) {
    document.write(colors[b] + "<br>");
}

// Task 3-2


colors.push(prompt(
    `Enter color name on Last
${colors}`));


document.write("<br> User added color on Last <br>");
document.write("Now colors Length is " + colors.length + "<br>");

for (b = 0; b < colors.length; b++) {
    document.write(colors[b] + "<br>");
}




// Task 3-3

colors.unshift(prompt(
    `Add two more colors at the beginning: (Enter 1st color) 
` + colors));

colors.unshift(prompt(
    `Add two more colors at the beginning: (Enter 2nd color)  
` + colors));

alert(`Now Colors are 
${colors}`);

document.write("<br> Added 2 colors from Start <br>");
document.write("Now colors Length is " + colors.length + "<br>");

for (b = 0; b < colors.length; b++) {
    document.write(colors[b] + "<br>");
}

// Task 3-D

colors.shift();

alert(`First color deleted automatic
${colors}`);

document.write("<br> Deleted 1st color automatic <br>");
document.write("Now colors length is " + colors.length + "<br>");

for (b = 0; b < colors.length; b++) {
    document.write(colors[b] + "<br>");
}

// Task 3-E

colors.pop();

alert(`Last color deleted automatic
${colors}`);

document.write("<br> Deleted last color automatic <br>");
document.write("Now colors Length is " + colors.length + "<br>");

for (b = 0; b < colors.length; b++) {
    document.write(colors[b] + "<br>");
}



// Task 3-F

var usrColorAdd = parseInt(prompt(`Where you want to add color
${colors}`) - 1);

var usrColorName = prompt("Enter color name to add");

colors.splice(usrColorAdd, 0, usrColorName);


alert(`Now Colors are updated
${colors}`);


document.write("<br> User added a Color in particular Place  <br>");
document.write("Now colors Length is " + colors.length + "<br>");



for (b = 0; b < colors.length; b++) {
    document.write(colors[b] + "<br>");
}

// Task 3-G Start from here


var userDelPosition = parseInt(prompt(`Enter color(s) position for delete
${colors}`) - 1);

var userDelNumbers = parseInt(prompt(`How many Colors you want to delete
${colors}`));


colors.splice(userDelPosition, userDelNumbers);

alert(`Finally colors are:
${colors}`);

document.write("<br> User Delete Colors from particular Place  <br>");

document.write("Now colors Length is " + colors.length + " <br>");

for (b = 0; b < colors.length; b++) {
    document.write(colors[b] + "<br>");
}