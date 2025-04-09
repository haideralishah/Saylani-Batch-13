let todos = [];
let olEl = document.querySelectorAll('.all-todos')[0];

function renderTodos(){
    olEl.innerHTML = "";
    for(let i =0; i < todos.length; i++){
        let todoItem = todos[i];
        let liEl = `<li>${todoItem}</li>`;
        olEl.innerHTML += liEl;
    }
}

function addTodo(){
    // add new todo in array
    //call renderTodos to print updated array
}