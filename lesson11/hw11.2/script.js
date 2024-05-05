document.addEventListener('DOMContentLoaded', function() {
    let images = [
        "assets/01.jpg", 
        "assets/02.jpeg", 
        "assets/03.jpeg", 
        "assets/04.jpeg", 
        "assets/05.jpeg", 
        "assets/06.jpeg", 
        "assets/07.jpeg", 
        "assets/08.jpeg", 
        "assets/09.jpeg",
    ]

    function chooseImage(arr) {
        let randomNumber = Math.floor(Math.random() * arr.length);

        const image = document.getElementById("image");
        image.src = arr[randomNumber];
    }

    chooseImage(images);
});