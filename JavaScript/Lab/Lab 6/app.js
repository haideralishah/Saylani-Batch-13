// let colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
// let pElements = document.querySelectorAll('p');

// function generate() {
//     for (let i = 0; i < pElements.length; i++) {
//         let p = pElements[i];
//         let ranNum = Math.floor(Math.random() * colors.length);
//         let ranColor = colors[ranNum];
//         p.style.color = ranColor;
//     }
// }










// let city = "I love Hyderabad.";
// let find = "Hyder";
// let reqIndx = city.indexOf(find);

// if (reqIndx !== -1) {
//     city = city.slice(0, reqIndx) + "Islam" + city.slice(reqIndx + find.length);
// }

// console.log(city);

























let iftar = ["pakora", "roll", "fruit chaat", 'samosa', 'rooh afza'];
let iftarItem = document.querySelectorAll(".iftar-item")[0];
let searchElement = document.querySelectorAll('input')[0];

function searchIftar() {
    let searchkeyword = searchElement.value.toLowerCase();
    if (iftar.includes(searchkeyword)) {
        let index = iftar.indexOf(searchkeyword);
        iftarItem.innerHTML = `Your favorite item ${searchkeyword} is available at index ${index}`;
    }
    else {
        iftarItem.innerHTML = `Your favorite item ${searchkeyword} is not available`;
    }
}