let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let squares = arr.map(num => num * num);

let cubes = arr.map(num => num * num * num);

console.log(`Original Array: [${arr}]`);
console.log(`Squared Array: [${squares}]`);
console.log(`Cubed Array: [${cubes}]`);

function findExpVal(arr, pow) {
    return arr.map(num => num ** pow);
}

let expArr = findExpVal(arr, 4);
console.log(`Exponential Array: [${expArr}]`);













let pkr = [50000, 70000, 90000, 17500, 20000, 30000];
let pkrToUsd = 281;
let pkrToGold = 31409;
let pkrToAed = 76.5;

function pkrConverter(pkr, currency) {
    let rate;
    switch (currency) {
        case "AED":
            rate = pkrToAed;
            break;
        case "Gold":
            rate = pkrToGold;
            break;
        default:
            rate = pkrToUsd;
            break;
    }
    return pkr.map(amount => (amount / rate).toFixed(2));
}

let usd = pkrConverter(pkr, "USD");
let gold = pkrConverter(pkr, "Gold");
let aed = pkrConverter(pkr, "AED");

console.log(`USD: [${usd}]`);
console.log(`Gold: [${gold}]`);
console.log(`AED: [${aed}]`);
















let nums = [2, 6, 9, 15, 16, 18, 21, 24, 36, 39];
let fltrdNums = nums
    .filter(num => num % 2 !== 0 && num % 3 === 0);

console.log(fltrdNums);

















let names = ['haider', 'abdullah', 'mustafa'];

let upCaseNames = names
    .map(name => name.toUpperCase());

console.log(`Upper Case Names: [${upCaseNames}]`);

let titleNames = names.map((name) => {
    let firstChr = name[0].toUpperCase();
    let restChr = name.slice(1).toLowerCase();
    return `${firstChr}${restChr}`;
})

console.log(`Title Case Names: [${titleNames}]`);


let newNames = ['haider', 'abdullah', 'mustafa', 'asad', 'akram'];

function findNames(namesArr, startingChr) {
    return namesArr
        .filter(name => name[0].toLowerCase() === startingChr.toLowerCase());
}

let filtrdNames = findNames(newNames, "a");
console.log(`Filtered Names: [${filtrdNames}]`);
