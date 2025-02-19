// let inpCount = prompt('how many items you want to add?');
// let items = [];

// for (let i = 0; i < inpCount; i++) {
//     let item = prompt('enter an item');
//     items.push(item);
// }

// console.log(`Total Items are: ${items.length}`);
// console.log(`Ites in list are: ${items}`);








// let bakery = ["cake", 'apple pie', "cookie", "chips", "patties"];
// let userWish = prompt("kia khayega?");
// userWish = userWish.toLowerCase();

// if (bakery.includes(userWish)) {
//     console.log("Your food is available.");
// }
// else {
//     console.log("Your food is not available.");
// }















// let numArr = [24, 53, 78, 91, 12, 1000, 900, 7943];
// let lrgNum;
// let smlNum;

// for (let i = 0; i < numArr.length; i++) {
//     let currentNum = numArr[i];
//     if (!lrgNum || currentNum > lrgNum) {
//         lrgNum = currentNum;
//     }

//     if (!smlNum || currentNum < smlNum) {
//         smlNum = currentNum;
//     }
// }

// console.log(lrgNum, smlNum);


















// let dimArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < dimArr.length; i++) {
//     let insideArr = dimArr[i];
//     for (let j = 0; j < insideArr.length; j++) {
//         console.log(insideArr[j]);
//     }

// }





















let userInput = +prompt('enter number');
let multiple = 1;

for (let i = 1; i <= userInput; i++) {
    console.log(i);
    multiple = multiple * i;
    // multiple *= i;
}
console.log(multiple);
