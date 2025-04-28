// var pairs = evens.map((v) => ({ even: v, odd: v + 1 }));

// var pairs = evens.map((v) => {
//   return { even: v, odd: v + 1 };
// });

// console.log({ even: v, odd: v + 1 });

// let car = {
//   name: "Mehran",
//   isAutomatic: false,
//   meterReading: 500,
//   tankCapacity: 50,
//   calcAverage: function (remainingFuel, currentReading) {
//     let distance = currentReading - this.meterReading;
//     let fuelConsumed = this.tankCapacity - remainingFuel;
//     let average = distance / fuelConsumed;
//     console.log(`${average} KM`);
//   },
// };

// car.calcAverage(40, 600);

// let car = {
//   name: "Mehran",
//   isAutomatic: false,
//   meterReading: 500,
//   tankCapacity: 50,
//   calcAverage: (remainingFuel, currentReading) => {
//     let distance = currentReading - this.meterReading;
//     let fuelConsumed = this.tankCapacity - remainingFuel;
//     let average = distance / fuelConsumed;
//     console.log(`${average} KM`);
//   },
// };

// car.calcAverage(40, 600);

// console.log(this);

// let ages = [12, 15, 18, 14, 13];

// let newNums = [2, 4, 6, 7, 8, 9];
// let sqares = [];

// for (let i = 0; i < newNums.length; i++) {
//   let square = newNums[i] * newNums[i];
//   sqares.push(square);
// }

// console.log(sqares);

// let newNums = [2, 4, 6, 7, 8, 9];
// let sqares = newNums.map((num, index) => index + num);
// console.log(sqares);

// let num = [12, 15, 18, 14, 13, 20, 22, 23, 25, 30];
// let newNum = [];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] >= 14 && num[i] <= 20) {
//     newNum.push(num[i]);
//   }
// }
// console.log(newNum);

// let ages = [12, 15, 18, 14, 13, 20, 22, 23, 25, 30];
// let newNum = ages.filter((age) => age >= 14 && age <= 20);
// console.log(newNum);

// let pakCities = [
//   "karachi",
//   "quetta",
//   "lahore",
//   "islamabad",
//   "peshawar",
//   "gilgit",
//   "sawat",
//   "faysalabad",
// ];

// let cities = [
//   "chicago",
//   "dehli",
//   "karachi",
//   "quetta",
//   "tel aviv",
//   "london",
//   "peshawar",
// ];

// let targetCities = cities.filter((city) => !pakCities.includes(city));

// console.log(targetCities);

// let users = [
//   {
//     name: "haider",
//     age: 45,
//   },
//   {
//     name: "Abrar",
//     age: 17,
//   },
//   {
//     name: "Abdullah",
//     age: 25,
//   },
//   {
//     name: "Aslam",
//     age: 15,
//   },
// ];

// let newUsers = users.map((user) => {
//   let userClone = { age: user.age };

//   if (user.age > 40) {
//     userClone.name = `Sir ${user.name}`;
//   } else if (user.age > 20) {
//     userClone.name = `Mr. ${user.name}`;
//   } else {
//     userClone.name = `Dear ${user.name}`;
//   }
//   return userClone;
// });

// console.log(newUsers);

// let sportsEligible = users.filter((user) => user.age < 20);
// console.log(sportsEligible);

let userData = {
  name: "haider",
  age: 45,
  qualification: "B.Com",
  expertise: "JavaScript",
};
function greet(user) {
  let age = 30;

  const { age: userAge, qualification, expertise, name } = user;

  let message = `Mr. ${name}, ${userAge} years old have degree of ${qualification} but his major expertise is in ${expertise}`;

  console.log(message);
}

greet(userData);
