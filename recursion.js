/**
 * @param {*} prev
 * @param {*} next
 * @return {*} Returns sum of passed values
 */
const sum = (prev, next) => prev + next;

/**
 * @typedef {*} T Type of elements of the {@code array}.
 * @typedef {*} R Type of reduction result.
 *
 * @callback reducer
 * @param {R} result
 * @param {T} next
 * @param {number} index
 * @param {Array.<T>} array
 * @returns {R}
 */
/**
 * Function accumulates values using recursion.
 *
 * @example
 * const someArray = [1, 2, 3, 4, 5];
 * const reduceValue = reduce(someArray, sum, 0); // 15
 *
 * @param {Array.<T>} arr
 * @param {reducer} fn
 * @param {R} initial
 * @param {number} [index = 0]
 * @returns {R} - Returns reduced value
 */
function reduce(arr, fn, initial, index = 0) {
    if(index === arr.length) return initial;
    const result = fn(initial, arr[index], index, arr);
    return reduce(arr, fn, result, index + 1);
}

module.exports = reduce;
