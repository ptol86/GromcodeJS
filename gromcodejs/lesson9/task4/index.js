

    rooms = {
        room1: [
            { name: 'room1 name1' },
            { name: 'room1 name2' },
            { name: 'room1 name3' },
            { name: 'room1 name4' },
            
        ],
        room2: [
            { name: 'room2 name1' },
            
        ],
        room3: [
            { name: 'room3 name1' },
            { name: 'room3 name2' },
            { name: 'room3 name3' },
            
        ],
        
    };


const getPeople = (obj) => {
    let result = [];
    result = Object.values(obj);
    let arr = result.flat();
    // console.log(arr);
    let aaa = [];
    for (let value of arr) {
        aaa.push(Object.values(value));
    }
    return aaa.flat();

};

console.log(getPeople(rooms));