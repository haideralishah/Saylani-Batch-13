// let cleanCities = ['karachi', 'quetta', 'lahore'];

// let userCity = prompt('Where do you live?');

// if (cleanCities.indexOf(userCity.toLowerCase()) !== -1) {
//     document.write("You live in a clean city.");
// }
// else {
//     document.write("You do not live in a clean city.");
// }















// let students = ['imran', 'danish', 'hammad', 'haider', 'talal', 'imran', 'danish', 'imran'];

// students.indexOf()
// students.lastIndexOf("imran")




// let cleanCities = ['karachi', 'quetta', 'lahore'];

// let userCity = prompt('Where do you live?');

// if (cleanCities.includes(userCity.toLowerCase())) {
//     document.write("You live in a clean city.");
// }
// else{
//     document.write("You do not live in a clean city.");
// }













// let fifo = [];
// let lifo = [];

// let inp1 = prompt('enter something'); // tom
// let inp2 = prompt('enter something');
// let inp3 = prompt('enter something');
// let inp4 = prompt('enter something');

// fifo.push(inp1);
// fifo.push(inp2);
// fifo.push(inp3);
// fifo.push(inp4);

// lifo.unshift(inp1);
// lifo.unshift(inp2);
// lifo.unshift(inp3);
// lifo.unshift(inp4);

// lifo = fifo.slice(0).reverse();
// console.log(fifo, lifo);

















// let phones = ['apple', 'samsung', 'oppo'];
// let ele = `
// <select>
//     <option>${phones[0]}</option>
//     <option>${phones[1]}</option>
//     <option>${phones[2]}</option>
// </select>
// `;

// document.write(ele);
// console.log(ele);
// alert(ele);









// let inp1 = +prompt('enter a number');
// let inp2 = +prompt('enter a number');

// if (inp1 > inp2) {
//     console.log(`First input ${inp1} is greater than second input ${inp2}`);
// }
// else if (inp2 > inp1) {
//     console.log(`second input ${inp2} is greater than First input ${inp1}`);
// }
// else {
//     console.log(`both inputs are equal.`);
// }



// let inp1 = +prompt('enter a number');

// if (inp1 > 0) {
//     console.log('it is positive.');
// }
// else if (inp1 < 0) {
//     console.log('it is negative.');
// }
// else{
//     console.log('it is zero');
// }









let userName = prompt("What is your name?") //hAIdEr

let frstChr = userName[0];
frstChr = frstChr.toUpperCase();

let restChr = userName.slice(1);
restChr = restChr.toLowerCase();

let titleCase = `${frstChr}${restChr}`;

console.log(titleCase);