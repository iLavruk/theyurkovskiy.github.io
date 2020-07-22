var btnAdd = document.getElementById("btnAdd");
var task = document.getElementById("task");
var tasks = document.getElementById("tasks");
var todoTasks = [];
btnAdd.addEventListener("click", addTodoItem);

function addTodoItem() {
    if (task.value.length === 0) {
        return;
    }

    if (todoTasks.includes(task.value)) {
        task.style.border = "1px solid red";
        return;
    }

    var todo = document.createElement("li");
    todo.addEventListener("click", todoDone);
    todo.addEventListener("dblclick", todoRemove);
    todo.textContent = task.value;
    tasks.appendChild(todo);
    todoTasks.push(task.value);
    task.value = "";
}

function todoDone() {
    this.classList.toggle("done");
}

function todoRemove() {
    if (confirm("Do you really want to delete?")) {
        todoTasks.splice(todoTasks.indexOf(this.textContent), 1);
        this.remove();
    }
}
