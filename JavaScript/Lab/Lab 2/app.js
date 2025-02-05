// let num1 = +prompt('enter a number');
// let num2 = +prompt('enter another number');
// let operator = prompt('enter operation you want to perform.');//+-*/%
// let result;

// if (operator === "+") {
//     result = num1 + num2;
// }
// else if (operator === "-") {
//     result = num1 - num2;
// }
// else if (operator === "x" || operator === "*") {
//     result = num1 * num2;
// }
// else if (operator === "/" || operator === "÷") {
//     result = num1 / num2;
// }
// else if (operator === "%") {
//     result = num1 % num2;
// }
// else {
//     result = 'Something went wrong.';
// }

// document.write("Answer: " + result);
// console.log("Answer: " + result);
// alert("Answer: " + result);











/*

let marks = +prompt("enter your exam percentage.");

80+       A-1     A+
70+       A
60+       B
50        C
45        D
33        E
33-       F


*/
// obtained / total * 100
// let obtainedMarks = +prompt('enter obtained marks');
// let totalMarks = +prompt('enter total marks');
// let percentag = obtainedMarks / totalMarks * 100;
// let grade, remarks;
// if (percentag >= 80) {
//     grade = "A-1";
//     remarks = "Excellant";
// }
// else if (percentag >= 70 && percentag < 80) {
//     grade = "A";
//     remarks = "Weldone";
// }
// else if (percentag >= 60 && percentag < 70) {
//     grade = "B";
//     remarks = "Good";
// }
// else if (percentag >= 50 && percentag < 60) {
//     grade = "C";
//     remarks = "You need improvement.";
// }
// else if (percentag >= 45 && percentag < 50) {
//     grade = "D";
//     remarks = "You need bht sari improvement.";
// }
// else if (percentag >= 33 && percentag < 45) {
//     grade = "E";
//     remarks = "poor performance.";
// }
// else {
//     grade = "F";
//     remarks = "lakh di lanat";
// }
// document.write("Grade: " + grade);
// document.write("<br />");
// document.write("Remarks: " + remarks);























let prd1 = prompt("product name");
let prd2 = prompt("another product name");
let price1 = +prompt('enter price of first product.');
let price2 = +prompt('enter price of second product.');
let qty1 = +prompt('enter quantity of first product.');
let qty2 = +prompt('enter quantity of second product.');
let shipping = +prompt('enter shipment charges');
let discount = +prompt('enter discount rate');

document.write("<h1>Shopping Cart</h1>");
document.write("<p>Price of " + prd1 + " is " + price1 + ".</p>");
document.write("<p>Quantity of " + prd1 + " is " + qty1 + ".</p>");

document.write("<p>Price of " + prd2 + " is " + price2 + ".</p>");
document.write("<p>Quantity of " + prd2 + " is " + qty2 + ".</p>");

document.write("<p>Shipping Charges: " + shipping + ".</p>");
let totalCost = (price1 * qty1) + (price2 * qty2) + shipping;
document.write("<p>Total Price: " + totalCost + "</p>");

let discountedPrice = totalCost - (totalCost / 100 * discount) ;
document.write("<p>Discounted Price: " + discountedPrice + "</p>");