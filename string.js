let str="Java application";

console.log(str.length);
console.log(str.length-1);
console.log(str.charAt(str.length-1));
console.log(str.lastIndexOf('a'));
console.log(str.search("a"));
console.log(str.includes('z'));
console.log(str.concat("****",'python application'));
console.log(str.concat(' **** '),"python");
console.log(str.startsWith("python"));
console.log(str.startsWith('Java'));
console.log(str.endsWith('application'));
console.log(str.substring(1));
console.log(str.substring(5,8));
console.log(str.substring(-1));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.slice(5));
console.log(str.slice(5,8));
console.log(str.slice(-12));

// Trim => trims the white space

str = "Mohana Vijayan";

trim="     java application    "
length=str.length
console.log(length);



let reversed = str.split("").reverse().join("");
console.log(reversed);

//Template literal

let fname = "Mohana";
let age = 30;

console.log(`my name is ${fname} and my age is ${age}`);

let message = `
Hello Mohana,
Welcome to JavaScript!
Happy Learning 😊
`;

console.log(message);







// 🔹 What is a Template Literal?

// Template literals are a way to create strings in JavaScript using backticks (`) instead of quotes, allowing variable interpolation and multi-line strings easily.

// Introduced in ES6.

// 🔹 Normal String vs Template Literal
// ❌ Normal string
// let name = "Mohana";
// let age = 33;

// console.log("My name is " + name + " and my age is " + age);

// ✅ Template literal
// console.log(`My name is ${name} and my age is ${age}`);


// ✔ Cleaner
// ✔ Easy to read
// ✔ Interview-preferred

// 🔹 Key Features of Template Literals
// 1️⃣ Variable Interpolation (${})

// You can insert variables directly.

// let city = "Chennai";
// console.log(`I live in ${city}`);

// 2️⃣ Expressions Inside Strings

// You can use calculations or logic.

// let a = 10;
// let b = 5;

// console.log(`Sum is ${a + b}`);

// 3️⃣ Multi-line Strings (Very useful)
// let message = `
// Hello Mohana,
// Welcome to JavaScript!
// Happy Learning 😊
// `;

// console.log(message);


// No need for \n.

// 4️⃣ Function Calls Inside
// function greet(name) {
//   return `Hello ${name}`;
// }

// console.log(`${greet("Mohana")}`);

// 🔹 Real-Time Example (React / Frontend)
// let price = 500;
// let gst = 0.18;

// console.log(`Total price is ₹${price + price * gst}`);

// 🔹 Interview One-Line Answer

// Template literals are string literals enclosed in backticks that allow embedded expressions using ${} and support multi-line strings.

// 🔹 Quick Tip 💡

// Use backticks → `

// Use ${} for variables

// Avoid string concatenation (+) when possible























