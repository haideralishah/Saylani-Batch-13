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