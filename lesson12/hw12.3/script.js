let list = document.querySelector('[data-list]');
let input = document.querySelector('[data-input]');
let submitButton = document.querySelector('[data-submit-button]');

new Sortable(list, {
    animation: 150
})

function deleteListItem(element) {
    let listItemToRemove = element.closest('[data-list-item]');
    listItemToRemove.remove();
}

function createListItem() {
    let task = input.value;
    
    let listItem = document.createElement('li');
    listItem.setAttribute('data-list-item', '');
    listItem.classList.add('list-group-item');
    listItem.innerText = task;

    let button = document.createElement('button');
    button.setAttribute('data-delete-button', '');
    button.classList.add('btn', 'btn-primary');
    button.style.marginLeft = '16px';
    button.innerText = "Delete";

    list.appendChild(listItem);
    listItem.appendChild(button);

    input.value = '';
}

list.addEventListener('click', (e) => {
    let clickedElement = e.target;

    if (clickedElement.hasAttribute('data-delete-button')) {
        deleteListItem(clickedElement);
    }
})

submitButton.addEventListener('click', () => {


    if (input.value.trim() !== '') {
        createListItem();
    }
})

input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        submitButton.click();
    }
})