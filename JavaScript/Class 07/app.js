/*
start point
end point condition
if any changes

for loop


for(start; end; change){
    //code block
}
*/
















// for (let i = 0; i < 100; i++) {
//     console.log(`Hello ${i}`);
// }

// console.log('Loop Ended');










// i = i + 2
// i +=  2

// for (let i = 0; i < 100; i = i + 2) {
//     console.log(`Hello ${i}`);
// }

// console.log('Loop Ended');






// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }


// for (let i = 100; i > 0; i -= 2) {
//     console.log(i);
// }





// for (let i = 0; i < 100; i += 3) {
//     if (i % 2 !== 0) console.log(`it is an odd number ${i}`);
// }





















// let tableName = +prompt('enter a table name.');
// let tableLimit = +prompt("how many times you want to multiply?");

// for (let count = 0; count <= tableLimit; count++) {
//     document.write(`${tableName} x ${count} = ${tableName * count}`);
//     document.write("<br />");
// }
















// let students = ["Alyan", "Bilal", "Mustafa", "Mujtaba", "Hammad", "Danish", "Saad", "Sami", "Ali"];


// for (let i = 0; i < students.length; i++) {
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