console.log("var at beginning", varVariable);
// console.log("let", letVariable); // throws error
// console.log("const", constVariable); //throws error
sample("executing sample at beginning");
// sample1("executing sample1 at beginning"); //throws the error

var varVariable = 10;
let letVariable = 11;
const constVariable = 12;

function sample(label) {
    console.log(label);
}

const sample1 = (label) => {
    console.log(label);
}

console.log("var at end", varVariable);
sample("executing sample at end")
sample1("executing sample1 at end");