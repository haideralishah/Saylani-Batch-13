// let feeSubmitStudents = [
//     "abc@gmail.com",
//     "xyz@gmail.com"
// ];
// let burgerBachas = ["abc@gmail.com", "stop@gmail.com"];

// function login(email, successCB, failCB) {
//     if (feeSubmitStudents.includes(email)) {
//         successCB();
//     }
//     else {
//         failCB();
//     }
// }


// let feeMessage = document.querySelectorAll('.fee-message')[0];

// function burgerBachaSuccess() {
//     feeMessage.innerHTML = `Thank you very very very much for your kind submission. We hope you enjoy the class.`
//     feeMessage.style.backgroundColor = "beige";
//     feeMessage.style.color = "brown";
// }

// function melaBachaSuccess() {
//     feeMessage.innerHTML = `Thk h class mai jao`;
//     feeMessage.style.backgroundColor = "white";
//     feeMessage.style.color = "black";
// }

// function burgerBachaFail() {
//     feeMessage.innerHTML = `Please ask your sweetest papa to submit the fees. Do not mind our request.`
//     feeMessage.style.backgroundColor = "beige";
//     feeMessage.style.color = "red";
// }

// function melaBachaFail() {
//     feeMessage.innerHTML = `Stay there at reception.`;
//     feeMessage.style.backgroundColor = "white";
//     feeMessage.style.color = "black";
// }

// let studentEl = document.querySelectorAll("input")[0];
// function markAttendance() {
//     let studentEmail = studentEl.value;
//     if (burgerBachas.includes(studentEmail)) {
//         login(studentEmail, burgerBachaSuccess, burgerBachaFail);
//     }
//     else {
//         login(studentEmail, melaBachaSuccess, melaBachaFail);
//     }
// }






























// function sum() {
//     let count = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         count = count + arguments[i];
//         // count += arguments[i];
//     }
//     return count;
// }
// let sum1 = sum(5, 7, 9, 7, 10, 22);
// let sum2 = sum(7, 9, 2, 46, 70, 555, 99, 450, 66);
// console.log(sum1, sum2);



























console.log('First World');
let count = 0;
setTimeout(function () {
    console.log('Hello World');
}, 1000);

setInterval(function () {
    console.log(`hello world ${count++}`);
}, 1000);

console.log('this is last console');