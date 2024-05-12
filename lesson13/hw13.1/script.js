let form = document.querySelector('[data-form]');
let formButton = document.querySelector('[data-form-button]');
let inputName = document.querySelector('[data-name]');
let inputMessage = document.querySelector('[data-message]');
let inputPhone = document.querySelector('[data-phone]');
let inputEmail = document.querySelector('[data-email]');
let inputs = [inputName, inputMessage, inputPhone, inputEmail];

let errorMessage = document.querySelector('[data-error-message]');
let errorPhone = document.querySelector('[data-error-phone]');
let errorEmail = document.querySelector('[data-error-email]');

inputMessage.addEventListener('change', () => {
    if (inputMessage.value.length >= 5) {
        errorMessage.innerText = ""
    } else {
        errorMessage.innerText = "Message has to contain 5 or more symbols"
    }
})

inputPhone.addEventListener('change', () => {
    if (inputPhone.value.match(/^\+38.*$/)) {
        errorPhone.innerText = ""
    } else {
        errorPhone.innerText = "Phone has to start with '+38'"
    }
})

inputEmail.addEventListener('change', () => {
    if (inputEmail.value.includes('@') && inputEmail.value.includes('.')) {
        errorEmail.innerText = ""
    } else {
        errorEmail.innerText = "Email has to contain '@' and '.'"
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (errorMessage.innerText === '' && errorPhone.innerText === '' && errorEmail.innerText === '') {
        for (let input of inputs) {
            console.log(input.value);
            input.value = '';
        }
    }
})