function withdraw(clients, balances, client, amount) {
        
        let personIndex = clients.findIndex(element => element === client);
        let result = balances[personIndex] - amount > 0 ? balances[personIndex] - amount: -1;
        return result;
}








(['Ann', 'John', 'Petro'], [1400, 87, -6], 'John', 50);