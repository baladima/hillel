function printChoice() {
    let userNumber = 0;
    let number;

    for (let i = 0; i < 10; i++) {
        userNumber = prompt("Введіть число більше 100");

        if (userNumber !== null && userNumber.length > 0) {
            number = userNumber;

            if (userNumber > 100 || isNaN(userNumber)) {
                return number;
            }
        }
    }

    if (typeof number !== "undefined") {
        return number;
    } else {
        return "Ви нічого не ввели";
    }
}

console.log(printChoice());