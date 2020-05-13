

const customers = {
    'customerId1': {
        name: 'William',
        age: 54
    },
    'customerId2': {
        name: 'Tom',
        age: 17
    },
};


const getCustomersList = (obj) => {
    let result = [];
    for (let key in obj) {
        let newObj = Object.assign({}, obj[key]);
        newObj['id'] = key;
        result.push(newObj);
        
    }
    return result.sort((a, b) => (a.age - b.age));

}

console.log(getCustomersList(customers));