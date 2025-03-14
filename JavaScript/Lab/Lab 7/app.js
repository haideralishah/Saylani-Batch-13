// function makeMessage(msg, user) {
//     let newMsg = `${user}! ${msg}.`;
//     return newMsg;
//     // return `${user}! ${msg}.`;
// }

// let myMessage = makeMessage("Ap ka suit ready h", "Abdullah");

// let h1 = document.querySelectorAll("h1")[0];
// h1.innerHTML = myMessage;











let baseForm = document.querySelectorAll('.base')[0];
let perpForm = document.querySelectorAll('.perp')[0];
let errEl = document.querySelectorAll('.error-message')[0];
let h1 = document.querySelectorAll("h1")[0];
function calculate() {
    let base = baseForm.value;
    let perp = perpForm.value;
    if (isNaN(base) || isNaN(perp)) {
        printError("Both fields require numbers.");
        return;
    }
    base = Number(base);
    perp = Number(perp);
    console.log(base, perp);
    let baseSquare = makeSquare(base);
    let perpSquare = makeSquare(perp);
    console.log(baseSquare, perpSquare);
    let hypSquare = baseSquare + perpSquare
    let hyp = Math.sqrt(hypSquare);
    h1.innerHTML = `Hypotenuse is ${hyp.toFixed(2)} for base ${base} and perpendicular ${perp}.`
}


function printError(errorMsg) {
    errEl.innerHTML = errorMsg;
    errEl.style.color = "#ff0000";
    setTimeout(function () {
        errEl.innerHTML = "";
    }, 3000);
}


function makeSquare(num) {
    return num * num;
}