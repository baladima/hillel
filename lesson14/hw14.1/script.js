const buttonPrev = document.querySelector(".slider-prev");
const buttonNext = document.querySelector(".slider-next");

const slides = document.querySelectorAll(".slide");
const dot = document.querySelector('[data-dot]');

for (let i = 0; i < slides.length - 1; i++) {
    let clonedDot = dot.cloneNode(true);
    dot.parentNode.appendChild(clonedDot);
}

dot.classList.add('is-active');

const dots = document.querySelectorAll('[data-dot]');

let slideIndex = 1;
changeSlide(slideIndex);

buttonPrev.addEventListener("click", () => {
    nextSlide(-1);
});

buttonNext.addEventListener("click", () => {
    nextSlide(1);
});

dots.forEach( (button, index) => {
    button.addEventListener('click', () => {
        currentSlide(index + 1)
    })
});

function nextSlide(n) {
    changeSlide((slideIndex += n));
}

function currentSlide (n) {
    changeSlide(slideIndex = n);
}

function changeSlide(n) {

    if (n === slides.length) {
        buttonNext.classList.add("hidden");
    } else {
        buttonNext.classList.remove("hidden");
    }

    if (n === 1) {
        buttonPrev.classList.add("hidden");
    } else {
        buttonPrev.classList.remove("hidden");
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";

    for (const dot of dots) {
        dot.classList.remove('is-active');
    }
    
    dots[slideIndex - 1].classList.add("is-active");
}
