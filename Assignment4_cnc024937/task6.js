

var dice = Math.random();
console.log(dice);

dice = dice * 6 + 1;
console.log(dice);

dice = Math.floor(dice);
document.write("random dice value: " + dice);