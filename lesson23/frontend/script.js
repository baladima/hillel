const apiUrl = 'http://localhost:3000/todos';

const list = document.querySelector('[data-list]');
const addButton = document.querySelector('[data-add-button]');
const addTodoButton = document.querySelector('[data-add-todo]');
const input = document.querySelector('#new-todo-title');

addButton.addEventListener('click', function() {
    $('#addTodoModal').modal('show');
});

$('#addTodoModal').on('shown.bs.modal', function () {
    $(input).trigger('focus')
})

addTodoButton.addEventListener('click', function() {
    if (input.value) $('#addTodoModal').modal('hide');
});

window.onload = fetchTodos;

addTodoButton.addEventListener('click', addTodo);

list.addEventListener('click', (e) => {
    const todoItem = e.target.closest("[data-item]")
    const itemId = todoItem.querySelector("[data-id]").textContent;

    if (e.target.closest("[data-delete-button]")) {
        deleteTodo(itemId)
        todoItem.remove();
    } else if (e.target.type === "checkbox") {
        const checkboxState = e.target.checked;
        completeTodo(itemId, checkboxState);
    }
});

function createItem(title, id, completed = false) {
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    listItem.setAttribute('data-item', '');

    const itemContent = document.createElement('div');
    itemContent.classList.add('list-item_content');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;

    const itemTitle = document.createElement('span'); // Changed to span for title
    itemTitle.textContent = title;

    itemContent.appendChild(checkbox);
    itemContent.appendChild(itemTitle);

    const deleteButton = document.createElement('a');
    deleteButton.classList.add('item-delete');
    deleteButton.setAttribute('data-delete-button', '');

    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgIcon.setAttribute('width', '16');
    svgIcon.setAttribute('height', '16');
    svgIcon.setAttribute('viewBox', '0 0 16 16');
    svgIcon.setAttribute('fill', 'none');

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('d', 'M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0');
    path.setAttribute('fill', '#fff');

    const idNumber = document.createElement('span');
    idNumber.classList.add('hide');
    idNumber.setAttribute('data-id', '');
    idNumber.textContent = id;

    svgIcon.appendChild(path);
    deleteButton.appendChild(svgIcon);

    listItem.appendChild(itemContent);
    listItem.appendChild(deleteButton);
    listItem.appendChild(idNumber);

    list.appendChild(listItem);
}

function fetchTodos() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(todo => {
                console.log(todo._id)
                console.log(todo.completed)
                createItem(todo.title, todo._id, todo.completed);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
}

function addTodo() {
    const title = input.value;

    if (title) {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, completed: false }),
        })
            .then(response => response.json())
            .then(() => {
                document.getElementById('new-todo-title').value = '';
                createItem(title);
            })
            .catch(error => console.error('Error adding todo:', error));
    }
}

function deleteTodo(itemId) {
    if (itemId) {
        fetch(apiUrl + "/" + itemId, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => console.error('Error deleting todo:', error));
    }
}

function completeTodo(itemId, completed) {
    if (itemId) {
        fetch(apiUrl + "/" + itemId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: completed }),
        })
            .then(response => response.json())
            .catch(error => console.error('Error completing todo:', error));
    }
}
