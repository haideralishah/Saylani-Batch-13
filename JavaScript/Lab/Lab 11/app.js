
let inputEl = document.querySelectorAll('input');
function signup() {
    let email = inputEl[0].value;
    let password = inputEl[1].value;
    if (!email || !password) return;

    let newUser = { email, password };
    saveInDB(newUser)
}


function saveInDB(newUser) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users);

    users.push(newUser);

    users = JSON.stringify(users);
        
    localStorage.setItem("users", users);
}
