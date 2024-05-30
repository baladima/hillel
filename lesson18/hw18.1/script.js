const wrapper = document.querySelector('[data-wrapper]');
const form = document.querySelector('form');
let minInput = document.querySelector('[data-min-input]');
let secInput = document.querySelector('[data-sec-input]');

function createTimer(minValue, secValue) {
    const row = document.createElement('div');
    row.classList.add('timer-row');

    const timer = document.createElement('div');
    timer.classList.add('timer');
    timer.innerHTML = '<span data-min>00</span>:<span data-sec>00</span>';

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">\n' +
        '                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>\n' +
        '                    </svg>';

    button.addEventListener('click', () => {
        clearTimeout(row.timer);
        row.remove();
    });

    row.appendChild(timer);
    row.appendChild(button);

    wrapper.appendChild(row);

    count(minValue, secValue, row);
}

function count(minValue, secValue, row) {
    function updateTimer() {
        const min = row.querySelector('[data-min]');
        const sec = row.querySelector('[data-sec]');

        if (minValue < 10) {
            min.textContent = "0" + minValue;
        } else {
            min.textContent = minValue;
        }

        if (secValue < 10) {
            sec.textContent = "0" + secValue;
        } else {
            sec.textContent = secValue;
        }

        if (secValue === 0 && minValue === 0) {
            clearTimeout(row.timer);

            row.style.backgroundColor = "lightgreen"
            setTimeout(() => {
                row.style.backgroundColor = "transparent"
            }, 1000);

            return;
        }

        if (secValue === 0) {
            minValue--;
            secValue = 59;
        } else {
            secValue--;
        }

        row.timer = setTimeout(updateTimer, 1000);
    }

    updateTimer();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let minValue = parseInt(minInput.value, 10);
    let secValue = parseInt(secInput.value, 10);

    minInput.value = ""
    secInput.value = ""

    if (isNaN(minValue)) minValue = 0;
    if (isNaN(secValue)) secValue = 0;

    if (minValue === 0 && secValue === 0) {
        alert("At least one number should be more than 0");
    } else {
        createTimer(minValue, secValue);
    }
})