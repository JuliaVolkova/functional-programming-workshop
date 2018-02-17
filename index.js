const doSomething = () => {
    return "Hello";
};

function repeat(operation, num) {
    for(let i = 0; i < num; i++){
        operation();
    }
}

repeat(doSomething, 3);

module.exports = repeat;

