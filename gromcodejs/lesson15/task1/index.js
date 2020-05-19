
export const makeCounter = () => {
    let count = 0;

    return function () {
        return count++;
    }
}

export const counter1 = makeCounter();
export const counter2 = makeCounter();