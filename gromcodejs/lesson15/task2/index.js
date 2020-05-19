

export const createCalculator = () => {

let memory = 0;

function add (num) {
    memory += num;
    return memory;
}
console.log(memory);

function decrease (num) {
    memory -= num;
    return memory;
}
console.log(memory);

function reset() {
    memory = 0;
    return memory;
}
console.log(memory);

function getMemo() {
    return memory;
}
return {
    add,
    decrease,
    reset,
    getMemo,
}
}

export let calc1 = createCalculator();
export let calc2 = createCalculator();