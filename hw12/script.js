const userNumber = prompt("Введіть ціле число");
let userNumberCheck = 1;

if (userNumber > 1) {
    for (let i = 2; i < userNumber; i++) {
        if (userNumber % i === 0) {
            userNumberCheck = 0;
            break;
        }
    }

    if (userNumberCheck) {
        console.log(userNumber + " - просте число");
    } else {
        console.log(userNumber + " - не просте число");
    }
}