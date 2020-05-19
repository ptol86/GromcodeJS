
let memory = 0;

function add(num) {
    memory = (memory + num);
}

function decrease(num) {
    memory = (memory - num);
}

function reset() {
    memory = 0;
}

function getMemo() {
    return memory;
}
