/*
.name //property
.name()  //method


arr.length;
.pop()
.shift()
.unshift()
.push()
array.splice(start,deleteCount, what to add...)
array.slice();
array.join();
array.reverse();

string.length;
string.slice();
string.split(); return an array

string
toLowerCase
toUpperCase
replace
indexOf

number
toFixed also inculde numbers to tell hiow many numbers should be after decimal points
toString

*/

// let cars = [
//     "mehran",
//     "corolla",
//     "civic",
//     "havel",
//     "mehran"
// ];
// let userName = "Haider Ali Shah";
// let len = cars.length;
// console.log(len, 'haider'.length);
// console.log(cars[2], userName[7], userName.length);



// let iftari = ["Pakore", "chole", "Fruit Chat"];

// let addSmtng = prompt('what do you want to take in Iftari?');

// iftari.push(addSmtng);

// console.log(iftari);

// let addToStart = prompt('What do you want to eat to break your fast');

// iftari.unshift(addToStart);

// console.log(iftari);

// iftari.pop();
// iftari.shift();

// console.log(iftari);







// let cars = ["Mahran", "Civic", "Corolla", "Coure"];

// let iftari = ["Pakore", "chole", "Fruit Chat", "dahi bare", 'Alo chanp', "khajoor", "sharbat", "tarbooz"];

// iftari.splice(3, 4);
// iftari.splice(3, 4, "Chicken Roll", "vegetable roll", "nuggests", "steak");
// iftari.splice(6, 0, "Water");

// console.log(iftari);








// let iftari = ["Pakore", "chole", "Fruit Chat", "dahi bare", 'Alo chanp', "khajoor", "sharbat", "tarbooz"];

// let favFood = iftari.slice(3, 6);

// let mustafaFav = iftari.slice(1, 3);
// let hammadFav = iftari.slice(6);
// let saadFav = iftari.slice(4, 6);
// let alyanFav = iftari.slice(5, 7);
// let aliFav = iftari.slice(1, 7);

// console.log(aliFav);


// let userName = "Haider Ali Shah";
// let lastName = userName.slice(7, 10);
// console.log(lastName);




// let userName = "Haider Ali Shah";
// let splitStr = userName.split(" ");


// let para = 'Abcd, efgh, ijkl xyz';
// let splitPara = para.split(", ")


// console.log(splitPara);


// let nicNum = "42550-7766764-5";
// let splitNic = nicNum.split("-");
// console.log(splitNic);


// let userName = "Haider Ali Shah";
// let splitName = userName.split(" ");
// console.log(splitName);

// let firstName = splitName[0];
// let lastName = splitName[1];
// let surName = splitName[2];

// console.log(userName.split(" ")[0]);










// let nicNumber = ["haider", "ali", "shah"];
// let joineNic = nicNumber.join("_");
// console.log(joineNic);







// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(nums.reverse(), nums);




// let userInput = prompt('type a word to check if it is palindrom or not');// java // mom

// let inputArr = userInput.split(""); // ["j", "a", "v", "a"] // ["m", "o ", "m"]

// let revrsedArr = inputArr.reverse(); //["a", "v", "a", "j"] // // ["m", "o ", "m"]

// let reversedInput = revrsedArr.join(""); // avaj // mom

// if (userInput === reversedInput) {  // java === avaj  //mom === mom
//     console.log('It is a palindrome');
// }
// else {
//     console.log('It is not a palindrome');
// }




// let userName = prompt("Enter your name");
// let lowerName = userName.toUpperCase();
// console.log(lowerName);




// let userName = prompt("Enter your name");
// if (userName.toUpperCase() === "Talal".toUpperCase()) {
//     console.log("Hey! we have the same name." + userName);
// } else {
//     console.log("Welcome buddy!");
// }


// let userName = "Talal Ahmed";
// console.log(userName.replace("Ahmed", ", Aliyan, Mustafa, Bilal"))


// let userName = "Talal Ahmed";
// console.log(userName.indexOf("a"));


// let nums = 3.14159;
// console.log(nums.toFixed());
// let nums = 3.14159;
// console.log(nums.toString());
// let nums = 3.14159;
// console.log(nums.toFixed(2));

