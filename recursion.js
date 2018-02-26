const sum = (prev, next) => prev + next;

const myArray = [1, 2, 3, 4, 5];

function reduce(arr, fn, initial, index = 0) {
    if(index === arr.length) return initial;
    const result = fn(initial, arr[index]);

    return reduce(arr, fn, result, index + 1);
}

reduce(myArray, sum, 0);

module.exports = reduce;
