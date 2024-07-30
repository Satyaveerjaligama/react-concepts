console.log("var at beginning", varVariable);
// console.log("let", letVariable); // throws error
// console.log("const", constVariable); //throws error
sample("executing at beginning");

var varVariable = 10;
let letVariable = 11;
const constVariable = 12;

function sample(label) {
    console.log(label);
}

console.log("var at end", varVariable);
sample("executing at end")