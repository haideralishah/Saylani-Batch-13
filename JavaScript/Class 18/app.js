/*
switch(variableName){
    case "":
        logic();
        break;

    case "":
        logic();
        break;

    default:
        break;
}


turnery operator

let variableName = condition ? true : false

*/




// let userName = prompt('what is your name?');

// switch (userName) {
//     case "haider":
//         alert('This is haider ali');
//         console.log("haider");
//         break;
//     case "abdullah":
//         alert('This is abdullah');
//         break;
//     default:
//         alert('this is default statement');
// }







// function whatIsGreet(relegion) {
//     let greet;
//     if (relegion === "Islam") {
//         greet = "Assalamuaalikum";
//     }
//     else {
//         greet = "Hello";
//     }
//     return greet;
// }

// let greet = whatIsGreet('Islam');

// let relegion = prompt("enter relegion name");
// let greet = relegion === "Islam" ? "Assalamualikum" : "Hello";
// console.log(greet);





























// let shiningStars = ['ghufran', "ahmed", "kamran"];
// let studentName = prompt('what is your name?');
// let isDiscValid = shiningStars.includes(studentName) ? true : false;
// console.log(isDiscValid)

// let isDiscountValid;
// if (shiningStars.includes(studentName)) {
//     isDiscountValid = true;
// }
// else {
//     isDiscountValid = false;
// }
// console.log(isDiscountValid);









// function sum(num1, num2) {
//     return num1 + num2;
// }

// function sub(num1, num2) {
//     return num1 - num2;
// }

// function product(num1, num2) {
//     return num1 * num2;
// }

// let num1Inp = +prompt('enter a number');
// let num2Inp = +prompt('enter another number');
// let operator = prompt('enter operator name + or -');

// let total = operator === "+" ?
//     sum(num1Inp, num2Inp) :
//     (
//         operator === "-" ?
//             sub(num1Inp, num2Inp) :
//             product(num1Inp, num2Inp)
//     );

// console.log(total);

























// let count = 0;

// while (count <= 100) {
//     console.log(count);
//     count++;
// }






let isExamsCleared = false;
while (isExamsCleared === false) {
    console.log('I am taking exams.');
    isExamsCleared = confirm('have you passed?');
}