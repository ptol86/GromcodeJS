function withdraw(clients, balances, client, amount) {
        
        let personIndex = clients.findIndex(element => element === client);
        let result = balances[personIndex] - amount > 0 ? balances[personIndex] - amount: -1;
        return result;
}

let zalupa, arr = 0;







