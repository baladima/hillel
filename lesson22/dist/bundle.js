(()=>{"use strict";const e=document.querySelector("[data-reload-button]"),t=document.querySelector("[data-select]");function n(){const e=document.querySelector("[data-select]").value;fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=1f2e850a04f56d2c12fab50327fffb0b&units=metric`).then((e=>e.json())).then((e=>{const t=document.querySelector("[data-name]"),n=document.querySelector("[data-temp]"),a=document.querySelector("[data-humidity]"),o=document.querySelector("[data-wind-speed]");switch(!0){case"Kyiv"===e.name:t.textContent="Киев";break;case"Krakow"===e.name:t.textContent="Краков";break;case"Nikopol"===e.name:t.textContent="Никополь";break;case"London"===e.name:t.textContent="Лондон";break;case"New York"===e.name:t.textContent="Нью-Йорк"}n.textContent=e.main.temp,a.textContent=e.main.humidity,o.textContent=e.wind.speed})).catch((e=>{console.log(e)}))}e.addEventListener("click",(()=>{n()})),t.addEventListener("change",(()=>{n()})),n()})();