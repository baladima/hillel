let button1 = document.querySelector("[data-button-1]");
let button2 = document.querySelector("[data-button-2]");

button1.addEventListener('click', () => {
    let link = prompt("Введіть посилання на сайт")
    window.location.href = link;
})

button2.addEventListener('click', () => {
    window.location.href = "google.com";
})