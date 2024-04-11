let userNumber = prompt("Введіть ціле число");

for (let i = 1; i <= 100; i++) {
    let result = i**2;

    if (result <= userNumber) {
        console.log(i);
    }
}