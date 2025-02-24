// let pEl = document.querySelectorAll('p');
// console.log(pEl);
// let newText = "The quick brown fox jumps over the lazy dog.";

// for (let i = 0; i < pEl.length; i++) {
//     pEl[i].innerHTML = newText;
// }



























// let liEl = document.querySelectorAll('ol>li.menu-item');

// for (let i = 0; i < liEl.length; i++) {
//     console.log(liEl[i].innerHTML);
// }













// let h2El = document.querySelectorAll('h2');

// let newText = "Hello USD";

// for (let i = 0; i < h2El.length; i++) {
//     h2El[i].innerHTML = newText;
// }


































// function bringFood() {
//     document.write('Here is your Daal Chawal<br />');
// }

// bringFood();
// bringFood();
// bringFood();
// bringFood();









// function greetUser() {
//     console.log("Hello User");
//     console.log("bring some food");
// }


// greetUser();
// greetUser();
// greetUser();
// greetUser();
// greetUser();













// function bringFood(meal1, meal2) {
//     console.log(`Here is your ${meal1} and ${meal2}.`);
// }

// bringFood("Paratha", "Chai");
// bringFood("Bengan", "Tende");
// bringFood("Biryani", "Tikka");
// bringFood("Kheer", "Gulab Jamun");














// function bringFood(meal1, meal2, guest) {
//     console.log(`Here is your ${meal1} and ${meal2} for ${guest}.`);
// }

// bringFood("Paratha", "Chai", "me");
// bringFood("Bengan", "Tende", "students");
// bringFood("Biryani", "Tikka", 'susrali');
// bringFood("Kheer", "Gulab Jamun", 'susrali');


















// function sum(num1, num2) {
//     console.log(num1 + num2);
// }

// sum(5, 7);

// sum(2, 3);

// sum(9, 0);





// function substract(num1, num2) {
//     console.log(num1 - num2);
// }

// substract(7, 5);

// substract(3, 2);

// substract(0, 9);



// function greetUser(userName, msg) {
//     console.log(`${msg} ${userName}`);
// }

// let user = prompt('what is your name?');

// greetUser(user, "Hello");

// greetUser("Abdullah", "Assalamualikum");

// greetUser("Ahmed", "Eid Mubarak");











// function greetUser() {
//     let user = prompt('What is your name?');
//     console.log(`Hello ${user}`);
// }













let newText = "The quick brown fox jumps over the lazy dog.";
let oldText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quasi unde excepturi laborum cumque, quae ad inventore dolore nemo et dolores, suscipit non voluptate. Voluptates illum dicta cum inventore quisquam?`;

let pEl = document.querySelectorAll('p');

function changePara() {
    for (let i = 0; i < pEl.length; i++) {
        if (pEl[i].innerHTML.toLowerCase() === oldText.toLowerCase()) {
            pEl[i].innerHTML = newText;
        }
        else {
            pEl[i].innerHTML = oldText;
        }
    }
}












// let pEl = document.querySelectorAll('p');

// function changeStyle() {
//     for (let i = 0; i < pEl.length; i++) {
//         console.log(pEl[i]);
//         pEl[i].style.color = "red";
//         pEl[i].style.backgroundColor = "yellow";
//     }
// }

// let inputEl = document.querySelectorAll('input')[0];
// function readForm() {
//     console.log(inputEl.value);
// }