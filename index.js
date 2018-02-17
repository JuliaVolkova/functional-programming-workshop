const someArray = [0, 1, 2, 3, 4];

function doubleAll(numbers) {
     return numbers.map(item => (
        item * 2
    ));
}

doubleAll(someArray);

module.exports = doubleAll;


