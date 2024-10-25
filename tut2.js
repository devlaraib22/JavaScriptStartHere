//Writing Your First String
let greeting = "Hello, World!";
console.log(greeting);

//String Operations
//1. Finding the length of a string
let str = 'JavaScript';
console.log(str.length); //output is 10


//2. Changing the case of a string
let string = "Naveed";
console.log(string.toUpperCase()); //output is NAVEED
console.log(string.toLowerCase()); //output is naveed

//3. Finding the position of a substring
let nam = "Hello, Java";
console.log(nam.indexOf("Java")); //output is 7

//4. Concatenating strings:
let str1 = "Laraib ";
let str2 = "Muskan";
let result = str1 + str2;
console.log(result);
//5. Extracting a Substring
let sentence = "Hello, JavaScript!";
let extracted = sentence.slice(7, 18);
console.log(extracted); // Output: JavaScript

//6. Using Template Literals
let ni = "Naveed";
let greet = `Hello, ${ni}!`;
console.log(greet); // Output: Hello, Naveed!
console.clear()



