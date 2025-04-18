// let h2El = document.getElementsByTagName("h2");

// h2El[0].innerHTML = "Hello Bhens Colony";

// let specialEl = document.getElementsByClassName("special");
// // console.log(specialEl);

// specialEl[1].innerHTML = `New Para Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum soluta
//       consectetur aut? Expedita necessitatibus distinctio repellendus omnis ex
//       ad aspernatur! Voluptas, dolorum. Accusamus placeat minima libero qui
//       natus culpa officiis!`;

// let covidEl = document.getElementById("covid-19");

// console.log(covidEl);

// covidEl.innerHTML = `Everyone is now vaccinated on paper. Covid-19 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//       soluta consectetur aut? Expedita necessitatibus distinctio repellendus
//       omnis ex ad aspernatur! Voluptas, dolorum. Accusamus placeat minima libero
//       qui natus culpa officiis!`;

// /*
//       document.getElementById()
//       document.getElementByClassName()
//       document.getElementByTagName()

//       document.querySelectorAll("#id")
//       document.querySelectorAll("tagName")
//       document.querySelectorAll(".className")

//       document.querySelectorAll('input[type="value"]')
//       document.querySelectorAll('div:nth-child')
//       document.querySelectorAll("ul>li>a");
//       document.querySelectorAll("div a");
//       document.querySelectorAll("div+p");
//       document.querySelectorAll("div~p");

//       */

// console.log(document.childNodes[1].childNodes[2].childNodes[7].childNodes);

// document.childNodes[1].childNodes[2].childNodes[7].innerHTML =
//   "Hello Mobile User";

// let specialEl = document.querySelectorAll(".special-container")[0];
// console.log(specialEl.parentNode);

// specialEl.childNodes[1].innerHTML = `New Para`;

// specialEl.parentNode.innerHTML = `<h1>New World Order</h1>`;

let specialEl = document.querySelectorAll(".special-container")[0];
console.log(specialEl.lastChild.previousSibling);
console.log(specialEl.firstChild.nextSibling);

specialEl.lastChild.previousSibling.innerHTML = "last Child";
specialEl.firstChild.nextSibling.innerHTML = "first Child";
