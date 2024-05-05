document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    const text = document.getElementById('text');

    text.style.color = "red";
    
    button.onclick = () => {
        if (text.style.color === "red") {
            text.style.color = "blue";
        } else {
            text.style.color = "red";
        }
    }
});