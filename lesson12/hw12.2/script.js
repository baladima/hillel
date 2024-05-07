let container = document.querySelector('[data-container]');

container.addEventListener('click', (e) => {
    let clickedButton = e.target.innerText;
    alert("Клікнуто на кнопці: " + clickedButton)
})