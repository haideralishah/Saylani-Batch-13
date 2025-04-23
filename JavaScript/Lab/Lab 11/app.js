
let inputEl = document.querySelectorAll('input');
function signup() {
    let email = inputEl[0].value;
    let password = inputEl[1].value;
    if (!email || !password) return;

    let newUser = { email, password };
    // let newUser = {
    //     email: email,
    //     password: password
    // };

    saveInDB(newUser)
}


function saveInDB(newUser) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users);
    let isAlreadyExisting = checkUserExistance(users, newUser);
    if (isAlreadyExisting) return;

    users.push(newUser);

    users = JSON.stringify(users);

    localStorage.setItem("users", users);
}


function checkUserExistance(users, newUser) {
    let isAlreadyExisting = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === newUser.email) {
            isAlreadyExisting = true;
            break;
        }
    }
    return isAlreadyExisting;
}