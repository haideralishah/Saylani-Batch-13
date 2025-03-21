
// function celsiusToFahrenheit(temperature) {
//     //(0°C × 9/5) + 32
//     return (temperature * 9 / 5) + 32
// }

// let freezingPoint = celsiusToFahrenheit(0);
// console.log(freezingPoint);



// function fahrenheitToCelsius(temperature) {
//     //(32°F − 32) × 5/9
//     return (temperature - 32) * 5 / 9;
// }

// let boilingPoint = fahrenheitToCelsius(212);
// console.log(boilingPoint);

























// function flipTheCard(card) {
//     console.log(card.innerHTML);
// }









// let count = 10;
// let counting = setInterval(function () {
//     count--;
//     console.log(count);
//     if (count === 0) {
//         clearInterval(counting);
//     }
// }, 500);









// let memberTimeout = setTimeout(function () {
//     console.log("Cancel membership");
// }, 2000);

// let alreadySubmitted = confirm('have you already submitted the fee?');
// if (alreadySubmitted) {
//     clearTimeout(memberTimeout);
// }




















// let i = 0;
// while (i <= 50) {
//     console.log(i);
//     i++;
// }









let userPick;
while (userPick !== 37 && userPick !== 39) {
    userPick = +prompt('pick a number between 0 to 100');
    console.log(userPick);
}