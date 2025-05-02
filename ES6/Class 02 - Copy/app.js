/*
Mutable and Immutable
Primitive are stored in stack
Non Primitive are stored in heap
Refrence Link: https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/

destructure
const {propNames} = objectName;

const [indexWiseNames] = arrayName;

spread operator

*/

// let user = "haider";
// let newUser = user;
// user = "abdullah";

// console.log(`newUser ${newUser}`);
// console.log(`user ${user}`);

// let student1 = {
//   name: "mustafa",
//   rollNum: 2643,
// };

// console.log(`Student 1`, student1);
// let student2 = student1;

// student2.name = "bilal";

// console.log(`Student 2`, student2);

// let users = [
//   {
//     name: "mustafa",
//     rollNum: 2643,
//     subjects: ["JS", "Python"],
//     isFeeSubmitted: true,
//   },
//   {
//     name: "bilal",
//     rollNum: 2644,
//     subjects: ["Rust", "Swift"],
//     isFeeSubmitted: true,
//   },
// ];

// for (let i = 0; i < users.length; i++) {
//   let rollNum = "26444";

//   const { name, rollNum: correctRollNum } = users[i];

//   console.log(`Student ${name} have roll number ${correctRollNum}`);
// }

// let fruits = ["apple", "banana", "mango"];

// const [favFruit, , lovingFruit] = fruits;

// console.log(favFruit);
// console.log(lovingFruit);

// let fruits = ["apple", "banana", "mango"];

// const [, , favFruit] = fruits;

// console.log(favFruit);

// function bringFruits() {
//   return ["apple", "banana", "mango"];
// }

// const [favFruit, ...restFruits] = bringFruits();

// console.log(favFruit);

// console.log(restFruits);

// let student1 = {
//   name: "mustafa",
//   rollNum: 2643,
// };

// let student2 = {
//   ...student1,
//   subjects: ["JS", "Python"],
// };

// console.log(student1, student2);
// student2.name = "bilal";
// console.log(student1, student2);

let fruits = ["apple", "banana", "mango"];

// let newFruits = fruits.slice(0);

let newFruits = [...fruits, "watermelon"];

// console.log(newFruits);

// console.log([...fruits]);

// let student1 = {
//   name: "mustafa",
//   rollNum: 2643,
// };

// console.log({ ...student1 });

// let student1 = {
//   name: "mustafa",
//   rollNum: 2643,
// };

// let student1Stiringify = JSON.stringify(student1);
// console.log(student1Stiringify);
// console.log(JSON.parse(student1Stiringify));

// let user = "haider";

// localStorage.setItem("user", user);

// let savedUser = localStorage.getItem("user");

// console.log(savedUser);
// localStorage.clear();

let student1 = {
  name: "mustafa",
  rollNum: 2643,
};

localStorage.setItem("student1", JSON.stringify(student1));
let savedStudent = localStorage.getItem("student1");
console.log(JSON.parse(savedStudent));


