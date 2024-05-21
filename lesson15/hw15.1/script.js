const form = document.querySelector('[data-add-form]');
const addInput = document.querySelector('[data-add-input]');
const list = document.querySelector('[data-list]');

let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

if (tasks.length) {
    tasks.forEach((item) => {
        addTask(item);
    })
}

function addTask(taskObj) {
    const task = document.createElement('li');
    task.classList.add('todo-item');

    if (taskObj.completed) {
        task.classList.add('todo-item--checked');
    }

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = taskObj.completed;

    taskCheckbox.addEventListener('click', () => {
        task.classList.toggle('todo-item--checked', taskCheckbox.checked);
        taskObj.completed = taskCheckbox.checked;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    const taskSpan = document.createElement('span');
    taskSpan.setAttribute('data-task-text', '');
    taskSpan.innerText = taskObj.content;
    taskSpan.classList.add("todo-item__description");

    const removeButton = document.createElement('button');
    removeButton.classList.add('todo-item__delete');
    removeButton.innerText = "Видалити";

    removeButton.addEventListener('click', () => {
        task.remove();
        tasks = tasks.filter(item => item !== taskObj);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    let taskElements = [taskCheckbox, taskSpan, removeButton];

    for (const element of taskElements) {
        task.appendChild(element);
    }
    
    list.appendChild(task);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let taskText = addInput.value.trim();
    let taskObj = { content: taskText, completed: false };
    addTask(taskObj);

    tasks.push(taskObj);
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    addInput.value = '';
})

// clearButton.addEventListener('click', () => {
//     localStorage.clear();
//     tasks.length = 0;
//     while (list.firstChild) {
//         list.removeChild(list.firstChild);
//     }
// })