// const (global and local and lexical and immutable)
// let (global and local and lexical)
// var (global and local)

// let userName = 'haider';
// userName = 'abdullah';

// const userName = "haider";
// userName = "Abdullah";

// const fruits = ["apple", "banana"];
// fruits = ["mango"];
// fruits.push("mango");

// const user = { email: "haider@gmail.com", password: "123" };
// user.password = 12345678;

// const fruits = ["apple", "banana"];
// fruits.push("mango");

// let userName = "haider";
// let greet1 = "welcome " + userName;
// let greet = `Welcome ${userName}`;

// const greet = function (a, b) {
//   return a + b;
// };

// let sum = greet(1, 2);

// const addTwoNum = (a, b) => a + b;
// let sum = addTwoNum(1, 2);
// console.log(sum);

// const findSquare = a => a * a;
// let square = findSquare(8);
// console.log(square);

// let names = ["haider", "abdullah", "aslam"];
// let ranName = () => names[Math.floor(Math.random() * 3)];

// console.log(ranName());

// let count = 0;
// let logsInterval = setInterval(() => {
//   console.log("this is inside interval");
//   count++;
//   if (count === 10) {
//     clearInterval(logsInterval);
//   }
// }, 1000);

// let fruits = ["apple", "banana", "mango"];
// let juices = [];

// for (let i = 0; i < fruits.length; i++) {
//   let newJuice = `${fruits[i]} juice`;
//   juices.push(newJuice);
// }

// console.log(juices);

/*
1. you want to iterate every item of array
2. you want to make a new array after processing
*/

let fruits = ["apple", "banana", "mango"];
let juices = fruits.map((fruit) => `${fruit} juice`);
console.log(juices);

let evenNums = [2, 4, 6, 8, 10, 12];
let squares = evenNums.map((num) => num * num);
console.log(squares);
