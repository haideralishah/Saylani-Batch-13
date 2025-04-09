let todos = [];
let olEl = document.querySelectorAll('.all-todos')[0];
let newTodoEl = document.querySelectorAll('#new-todo')[0];
let addBtnEl = document.querySelectorAll('.add-btn')[0];
let editIndex;

function renderTodos() {
    olEl.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        let todoItem = todos[i];
        let liEl = `<li>
                        ${todoItem}
                        <button onclick="deleteTodo(${i})">
                            Delete
                        </button>
                        <button onclick="editTodo(${i})">
                            Edit
                        </button>
                    </li>`;


        olEl.innerHTML += liEl;
    }
}

function addTodo() {
    let newTodo = newTodoEl.value;
    todos.push(newTodo);
    renderTodos();
    newTodoEl.value = "";
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function editTodo(index) {
    let editItem = todos[index];
    editIndex = index;
    newTodoEl.value = editItem
    addBtnEl.innerHTML = "Save";
    addBtnEl.onclick = saveTodo;
}

function saveTodo() {
    console.log(newTodoEl.value);
    console.log(editIndex);
    // update array using splice
    // call renderTodos
    // revert save button to add
    // modify add button function again addTodo
    // revert edit index to undefined again
    // clear edit form
}