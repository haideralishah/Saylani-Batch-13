/*
do{
}while(condition)

onclick
href="JavaScript:void(0)"

onclick
onmouseout
onmouseover
onfocus
onblur


element.className += " newClass"

*/


// while(condition){
//     doSomething();
// }


// var i = 0;
// do {
//     console.log(i);
//     i++;

// } while (i <= 3);


// let isExamsCleared = true;
// do {
//     console.log('I am taking exams.');
//     isExamsCleared = confirm('have you passed?');
// } while (isExamsCleared === false)





function greet() {
    let userName = prompt('what is your name?');
    console.log(`Hello ${userName}`);
    // if (true) {
    //     location = "https://www.youtube.com/c/jsguru"
    // }
    // else {
    //     askForMoney();
    // }
}


function changeText(el) {
    console.log(el);
    el.innerHTML = "Awe. You missed the click."
}

function revertTheText(el) {
    el.innerHTML = "If you click me, I give you a 1000 USD."

}

function showAfterImage(el) {
    el.src = "./images/after.png"
    el.alt = "with 20 percent body fat"
}

function showBeforeImage(el) {
    el.src = "./images/before.png"
    el.alt = "with 45 percent body fat"
}

function changeStyle(el) {
    if (el.style.backgroundColor === "lightgrey") {
        el.style.backgroundColor = "#fff";
    }
    else {
        el.style.backgroundColor = "lightgrey";
    }
}
let provinceEl = document.querySelectorAll(".province")[0];
let sindhCities = ['karachi', 'nawabshah', 'hyderabad', 'sukkur'];

function fillProvince(el) {
    if (sindhCities.includes(el.value.toLowerCase())) {
        provinceEl.value = "Sindh";
    }
    else if (el.value.toLowerCase() === "lahore") {
        provinceEl.value = "Punjab";
    }
}




function assignClass(el) {
    console.log(el);
    el.className += ' imgStyle';
}


function expandText(el) {
    el.parentNode.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officiis libero consequatur nesciunt quas qui eaque fugiat natus corporis tenetur dolorum, minus incidunt ipsa eveniet quo perferendis, ea necessitatibus. Quidem.<span onclick="shrinkText (this)">show less</span>`;
}

function shrinkText(el) {
    el.parentNode.innerHTML = `Lorem ipsum dolor... <span onclick="expandText (this)">show more</span>`;
}