/*
""
false
0
null
undefined

Math.round(number);
Math.ceil(number);
Math.floor(number);
Math.random();


*/

// let inputEl = document.querySelectorAll('input')[0];
// let olEl = document.querySelectorAll('ol')[0];

// function makeTitleCase() {
//     let userName = inputEl.value;
//     if (!userName) return;

//     let splitName = userName.split(" ");
//     let titleCaseNames = [];
//     for (let i = 0; i < splitName.length; i++) {
//         let eachName = splitName[i];
//         let firstChr = eachName[0];
//         let restChr = eachName.slice(1);

//         let firstChrUpper = firstChr.toUpperCase();
//         let restChrLower = restChr.toLowerCase();
//         let titleCase = `${firstChrUpper}${restChrLower}`;

//         titleCaseNames.push(titleCase);
//     }

//     let titleCaseName = titleCaseNames.join(" ");
//     olEl.innerHTML += `<li>${titleCaseName}</li>`;
//     inputEl.value = "";
// }










































// let num1 = 6.1;
// let num2 = 6.9;

// let round = Math.round(num2);
// console.log(round);

// let floor = Math.floor(num2);
// console.log(floor);

// let ceil = Math.ceil(num1);
// console.log(ceil);












// let num1 = -1.1;
// let num2 = -1.9;

// let floor = Math.floor(num2); //-2
// console.log(floor);

// let ceil = Math.ceil(num1); // -1
// console.log(ceil);







// let imageEl = document.querySelectorAll('img')[0];

// function tossTheCoin() {
//     let randomNum = Math.ceil(Math.random() * 2);

//     if (randomNum === 1) {
//         imageEl.src = 'images/chand.PNG'
//     }
//     else if (randomNum === 2) {
//         imageEl.src = 'images/chap.PNG'
//     }
// }




// Controlling probablity

// let imageEl = document.querySelectorAll('img')[0];
// function tossTheCoin() {
//     let randomNum = Math.ceil(Math.random() * 6);
//     if (randomNum >= 1 && randomNum < 6) {
//         imageEl.src = 'images/chand.PNG'
//     }
//     else if (randomNum === 6) {
//         imageEl.src = 'images/chap.PNG'
//     }
// }










let para = "Lorem ipsum dolor sit amet World War II consectetur adipisicing elit. Illum fuga excepturi esse! Vitae World War II eveniet impedit iure  erosimilique, World War II ab voluptatibus dolores quisquam World War II optio eaque rerum, explicabo a molestias id World War II unde!"

let findingWord = "World War II";
let replacedWord = "the Second World War";

for (let i = 0; i < para.length; i++) {
    if (para.slice(i, i + findingWord.length) === findingWord) {
        para = para.slice(0, i) + replacedWord + para.slice(i + findingWord.length);
    }
}
console.log(para);











