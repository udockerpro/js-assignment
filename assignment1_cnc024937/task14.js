

// 14. What will be the output in variables ​ a, b & result​ after execution of
// the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;




var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a = " + a + "<br>" + "b = " + b + "<br>");
document.write("Result = " + result);



/*
Explain the output at each stage:
--a;                       result is 1 /     decrease from a,                            a = 1.
--a - --b;                 result is 1 /     decrease from b first b is 0, a still       a = 1.
--a - --b + ++b;           result is 2 /     b increase first so b is now                b = 1.
--a - --b + ++b + b--;     result is 3 /     b decrease again                            b = 0.
  1 -  0  +  1  +  1       = 3 Result
*/
