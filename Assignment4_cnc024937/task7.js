

var a = "The quick brown fox jumps over the lazy dog";
var b = a.toLowerCase();
var userSearch = prompt("The quick brown fox jumps over the lazy dog", "search any word");


var c;
var num = 0;
var morethen1 = "occurrence";

for (i = 0; i < b.length & userSearch != null & userSearch != ""; i++) {
    userSearch = userSearch.toLowerCase();

    c = b.indexOf(userSearch, i);

    if (c != -1) {
        console.log("word found on index" + c);
        num = num + 1;
        i = c;

        if (num > 1) {
            morethen1 = "occurrences";
        }
    }
}


document.write("There are " + num + " " + morethen1 + " of the word '" + userSearch + "'");

console.log("userSearch is " + userSearch);



