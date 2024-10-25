var x = 10;
console.log(x); //output is 10

var x = 20; // redeclaring a variable
console.log(x); //output is 20

x = 30; // updating the variable
console.log(x); //output is 30

let y = 2;
console.log(y); //output is 2
// let y = 20; // This would cause an error (SyntaxError: Identifier 'y' has already been declared)

y = 36; //updating the variable
console.log(y); //output is 30

const z = 10;
console.log(z); // Output: 10

// z = 20; // This would cause an error (TypeError: Assignment to constant variable.)

// const z = 30; // This would also cause an error (SyntaxError: Identifier 'z' has already been declared)
console.clear();
var a = 5;
let b = "10";

if (a === b) {
  console.log("value match with datatype");
} else if (10 === b) {
  console.log("value match");
} else {
  console.log("value not matched");
}
