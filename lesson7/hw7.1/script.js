function sum(number) {
    let sum = 0;
    return function(number) {
        sum += number;
        return sum;
    }
}

const total = sum();

console.log(total(4)); // 4

console.log(total(6)); // 10

console.log(total(10)); // 20

console.log(total(7)); // 27