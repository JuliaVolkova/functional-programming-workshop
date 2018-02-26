const sum = (prev, next) => prev + next;

const myArray = [1,2,3];

function reduce(arr, fn, initial) {
    if(arr.length === 0) return initial;
    let result = fn(initial, arr.shift());
    return reduce(arr, fn, result);
}

reduce(myArray, sum, 0);

module.exports = reduce;

