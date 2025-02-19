// let fruits = ['Apple', 'Mango', 'Oranges', 'Watermelon', 'Strawberry'];

// let favFruits = fruits.slice(1, 4);

// console.log(favFruits);






// let students = ['Ahmed', 'Alyan', 'Sami', 'Shukaib', 'Hammad'];
// console.log(students);

// students.splice(1, 1, "Alyan Saleem", "Bilal");

// console.log(students);





// let fruits = ['Apple', 'Oranges', 'Watermelon', 'Strawberry'];

// let fruitsLen = fruits.length;

// console.log(fruitsLen);








// let students = ['Ahmed', 'Alyan', 'Sami', 'Shukaib', 'Sami', 'Hammad', 'Sami'];

// let samiIndex = students.indexOf("Sami");
// let samiLastIndex = students.lastIndexOf("Sami");

// console.log(samiIndex, samiLastIndex);



















// let allNames = [];
// let ticketPrice = 4000;

// for (let i = 0; i < 4; i++) {
//     let userName = prompt("what is your name?");
//     allNames.push(userName);
//     if (i < 2) {
//         console.log(`Your ticket price is ${ticketPrice / 100 * 80}`);
//     }
//     else {
//         console.log(`Your ticket price is ${ticketPrice}`);
//     }
// }

// console.log(allNames);




// let students = ['Ahmed', 'Alyan', 'Sami', 'Shukaib', 'Hammad', 'Bilal'];

// //                      6
// for (let i = 0; i < students.length; i++) {
//     //         students[0]
//     console.log(students[i]);
// }










let cleanCities = ["Karachi", "Hyderabad", "Peshawar"];

let city = prompt('Where do you live?');

for (let i = 0; i < cleanCities.length; i++) {
    if (cleanCities[i].toLowerCase() === city.toLowerCase()) {
        console.log('You live in a clean city;');
        break;
    }
}
















// let cleanCities = ["Karachi", "Hyderabad", "Peshawar"];
// let city = prompt('Where do you live?');
// let isClean = false;

// for (let i = 0; i < cleanCities.length; i++) {
//     if (cleanCities[i].toLowerCase() === city.toLowerCase()) {
//         isClean = true;
//         break;
//     }
// }

// if (isClean) {
//     console.log('You live in a clean city.');
// }
// else {
//     console.log('You do not live in a clean city.');
// }




















// for (let i = 0; i < 10; i++) {
//     // console.log('Outer loop');
//     for (let j = 0; j < 10; j++) {
//         console.log('outerloop', i, 'inner loop', j);
//     }

// }





















let firstNames = ["Abdullah", "Akram", "Aslam", "Imran"];
let lastNames = ['Shah', "Hussain", "Zaidi", "Khan"];
let possibleNames = [];

for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
        let fullName = `${firstNames[i]} ${lastNames[j]}`;
        possibleNames.push(fullName);
    }
}

console.log(possibleNames);