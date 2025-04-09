let todos = [];
let olEl = document.querySelectorAll('.all-todos')[0];
let newTodoEl = document.querySelectorAll('#new-todo')[0];

function renderTodos() {
    olEl.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        let todoItem = todos[i];
        let liEl = `<li>
                        ${todoItem}
                        <button onclick="deleteTodo(${i})">
                            Delete
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
    console.log(index);
    // splice receiving index 
    // call renderTodos
}