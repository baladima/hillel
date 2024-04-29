const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEvenNumbers(arr) {
    let newArr = [];
    for (number of arr) {
        if (number % 2 === 0) {
            newArr.push(number);
        }
    }
    return newArr;
}


const even = getEvenNumbers(arr);
console.log(even); // [2, 4, 6, 8]