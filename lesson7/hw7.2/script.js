function product(number1) {
    return function(number2) {
        return number1 * number2;
    }
}

const result = product(5)(2);

console.log(result)