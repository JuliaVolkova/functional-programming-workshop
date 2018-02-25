/**
 * Function transform an array of strings to object, where we can see how many times we face some string.
 *
 * @example
 * const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
 * const frequency = countWords(inputWords); // { Apple: 2, Banana: 1, Durian: 3 }
 *
 * @param {Array.<String>} array
 * @returns {Object} - Returns Object where the key is an element of an array, value - numbers of occurrences
 */
function countWords(array) {
    const counting = (frequency, element) => {
        frequency[element] = frequency[element] ? frequency[element] + 1 : 1;
        return frequency;
    };
    return array.reduce(counting, {});
}

module.exports = countWords;

