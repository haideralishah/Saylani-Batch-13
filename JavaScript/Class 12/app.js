/*
string.replace()
string.replaceAll()

Number()
isNaN()

parseInt()
parseFloat()
num.toString()

num.toFixed(decimal places)

to access last index
length -1

*/



// let para = "Lorem World War II ipsum dolor sit amet World War II consectetur adipisicing elit. Illum Haider fuga excepturi esse! Vitae World War II eveniet impedit iure  erosimilique, World War II ab voluptatibus dolores quisquam World War II optio eaque rerum, explicabo a molestias id World War II unde!"

// let findingWord = "World War II";
// let replacedWord = "the Second World War";

// for (let i = 0; i < para.length; i++) {
//     if (para.slice(i, i + findingWord.length) === findingWord) {
//         para = para.slice(0, i) + replacedWord + para.slice(i + findingWord.length);
//     }
// }
// console.log(para);


















// let para = "Lorem World War II ipsum dolor sit amet World War II consectetur adipisicing elit. Illum Haider fuga excepturi esse! Vitae World War II eveniet impedit iure  erosimilique, World War II ab voluptatibus dolores quisquam World War II optio eaque rerum, explicabo a molestias id World War II unde!"

// let findingWord = "World War II";
// let replacedWord = "the Second World War";

// para = para.replace("World War II", "the Second World War");
// para = para.replace(/World War II/g, "the Second World War");
// para = para.replaceAll("World War II", "the Second World War");

// console.log(para);































// let sum = Number("250") + Number("150")

// let num = 'Apple';
// let num2 = '250';

// console.log(Number(num));

// console.log(isNaN(num2));







// let num = "52.789";

// console.log(parseInt(num));
// console.log(parseFloat(num));



// let num = 5.7;

// console.log(num.toString());








// let num = 517.73279153481;

// console.log(num.toFixed(2));


// let num = 1.55555;
// num = num.toFixed(4);
// //  1.5556
// if (num[num.length - 1] === "5") {
//     num = num.slice(0, num.length - 1) + "6";
// }

// console.log(num)







































let day = new Date().getDay();
let month = new Date().getMonth();

console.log(day, month);