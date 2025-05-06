// Primitive => call by value
// let num = 2;
// let x = 6
// b = 4

// add(x , b) {
//   x = 10
//   b = 5
//   return x + b;  => 15
//   console.log(x, b) => 10, 5
// }

// console.log(x, b) => 6, 4


// 7 types: String, Number, Boolean, BigInt, undefined, symbol, null
// const score = 100;
// const scoreValue = 100.3
// const isLoggedIn = false;
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')


// console.log(id === anotherId);

// const bigInt = 27652598323762n;

// Non -  Primitive => call by reference

// Arrays, Objects, Functions

// const contact = ["prashant", "yogesh", "raj"]
// console.log(typeof contact);

let myObj = {
  name: "raj",
  age: 18,
}

const myFunction = function(string, number) {
  console.log("hello");
}

//console.log(typeof myFunction)

 // Assignment Ecma script
// https://262.ecma-international.org/5.1/#sec-11.4.3

// (Primitive) => Stack, (Non Primitive) => Heap

let myYoutubename = "rajcompetitivegamer"

let anothername = myYoutubename

anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

// Heap
let userOne = {
  email: "user@gmail.com",
  upi: "user@axis"
}

let userTwo = userOne

userTwo.email = "raj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//https://codedamn.com/news/javascript/memory-management-complete-guide

