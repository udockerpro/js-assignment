

a = [24, 53, 78, 91, 12];

var large =[];



for (i = 0;  i < a.length; i++) {
    let myValue = a[i];

    if(large === undefined) {
        large.push(myValue);

    } else if (large < myValue) {
       large = myValue; 
    }
}

document.write("Array items: " + a + "<br>");

document.write("The largest number is " + large);


