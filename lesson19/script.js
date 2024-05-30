const reloadButton = document.querySelector("[data-reload-button]");
const select = document.querySelector("[data-select]");

reloadButton.addEventListener('click', () => {
    updateWeather();
})

select.addEventListener('change', () => {
    updateWeather();
})

function updateWeather() {
    const city = document.querySelector("[data-select]").value;
    const API_KEY = '1f2e850a04f56d2c12fab50327fffb0b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const name = document.querySelector("[data-name]");
            const temp = document.querySelector("[data-temp]");
            const humidity = document.querySelector("[data-humidity]");
            const windSpeed = document.querySelector("[data-wind-speed]");

            switch (true) {
                case (data.name === "Kyiv"):
                    name.textContent = "Киев";
                    break;
                case (data.name === "Krakow"):
                    name.textContent = "Краков";
                    break;
                case (data.name === "Nikopol"):
                    name.textContent = "Никополь";
                    break;
                case (data.name === "London"):
                    name.textContent = "Лондон";
                    break;
                case (data.name === "New York"):
                    name.textContent = "Нью-Йорк";
                    break;
            }

            temp.textContent = data.main.temp;
            humidity.textContent = data.main.humidity;
            windSpeed.textContent = data.wind.speed;
        })
        .catch(error => {
            console.log(error);
        });
}

updateWeather();