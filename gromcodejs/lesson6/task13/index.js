function withdraw(clients, balances, client, amount) {
    let result = -1;
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] === client) {
            let balanceDiff = balances[i] - amount;
            if (balanceDiff >= 0) {
                balances[i] = balanceDiff;
                result = balanceDiff;


            }
            break;

        }
    }
    return result;

}

// (["Ann", "john", "user"], [1400,87,-6], "user", 10)