// let students = ['imran', 'imran', 'imran', 'abdullah', 'aslam', 'imran', 'adnan'];

// let matchedCount = 0;

// let reqStr = "imran";
// let reqIndx = 3;

// for (let i = 0; i < students.length; i++) {
//     if (students[i].toLowerCase() === reqStr.toLowerCase()) {
//         if (matchedCount < reqIndx) {
//             matchedCount++;
//             if (matchedCount === reqIndx) {
//                 console.log(`Required imran is at index ${i}`);
//             }
//         }
//     }
// }


























// let fullName = "haider ali shah";
// let weight = 78;
// let age = 34;
// let height = 69;
// let isMarried = true;
// let gadgets = ['Phone', 'laptop', 'PC', 'YouTube Setup'];


// let human = {
//     fullName: "haider ali shah",
//     weight: 78,
//     age: 34,
//     height: 69,
//     isMarried: true,
//     gadgets: ['Phone', 'laptop', 'PC', 'YouTube Setup']
// }

// console.log(human);
// console.log(human.fullName);
// document.write(human.fullName);
// console.log(human["fullName"]);
// console.log(human.gadgets[2]);




























// let car = {
//     name: 'Mehran',
//     isAutomatic: false,
//     color: 'White',
//     isHybrid: false,
//     fuelAverage: 13,
//     price: 1900000
// }

// console.log(car.name);
// console.log(car.price);

















// let student = {};

// student.name = "Ahmed";
// student.rollNumber = 2643;

// console.log(student);
































// let pEl = document.querySelector(".special");

// let pEl = document.querySelectorAll(".special");

// console.log(pEl[1]);


// let h2 = document.querySelectorAll("#html-learning")[0];

// console.log(h2.innerHTML);

// h2.innerHTML = "Hello TypeScript";





// let greet = prompt('what greet do you want to offer?');

// let divEl = document.querySelectorAll('.greet-msg')[0];

// divEl.innerHTML = `<p>${greet}</p>`;







// for (let i = 0; i < 3; i++) {

//     let greet = prompt('what greet do you want to offer?');

//     let divEl = document.querySelectorAll('.greet-msg')[0];

//     // divEl.innerHTML += `<p>${greet}</p>`;
//     divEl.innerHTML = `<p>${greet}</p> ${divEl.innerHTML}`;

// }



// let num = 8;

// num = num + 5;
// num += 5;

// let user = "haider";

// user = user + " Ali";
// user += " Ali";

// user = " Ali" + user;


















let userName = prompt('what is your name?');

let h1Element = document.querySelectorAll('.user-name')[0];

h1Element.innerHTML = `Mr. ${userName}! Your fees is due. `;



