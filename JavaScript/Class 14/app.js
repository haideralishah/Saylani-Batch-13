

// function greet(userName, message = "Assalamualaikum") {
//     document.write(`${message} ${userName}`);
// }

// greet("Haider", "Hola");



// function printAllParams() {
//     // console.log(arguments);
//     let total = 0;
//     let multiple = 1;

//     for (let i = 0; i < arguments.length; i++) {
//         // sum += arguments[i];
//         total = total + arguments[i];
//         multiple = multiple * arguments[i];
//     }
//     console.log(total, multiple);
// }

// printAllParams(1, 2, 3, 4, 5, 6, 7, 8);
// printAllParams('abdullah', "ahmed", "muzammil", "aslam");

















// function greet(a) {
//     console.log(a[1]);
// }
// greet(['apple', 'banana'])

// function greet(a) {
//     console.log(`${a.name} ${a.rollNumber}`);
// }

// greet({ name: "haider", rollNumber: 2643 });













// function execute(cb, num1, num2) {
//     cb(num1, num2);
// }

// execute(function (numA, numB) {
//     console.log(numA + numB);
// }, 6, 2);

// function subtract(numA, numB) {
//     console.log(numA - numB);
// }
// execute(subtract, 6, 2);












// console.log('hello world');

// let user = prompt("what is your name?");

// function greet(user) {
//     console.log(`Hello ${user}`);
// }

// greet("haider");


























function cookFood(food1, food2) {
    let wholeFood = `${food1} and ${food2}`;

    return wholeFood;
}


let myFood = cookFood("samosa", "fruit chat");

console.log(myFood);










