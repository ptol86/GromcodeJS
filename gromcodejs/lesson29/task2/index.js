// pinger (num, period)

export const pinger = (num, period) => {
    let i = num;
    console.log("ping");
    const  interval = setInterval(() => {
        if (--i > 0) {
            console.log("ping");
        } else {
            clearInterval(interval);

        }
    }, period);

    // setTimeout(() => {
    // }, num * period);
}

// pinger(5, 1000);