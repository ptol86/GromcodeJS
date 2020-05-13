
const rooms = {
    room1: [
        [ {name: 'room1 name1'}, {name: 'room111 name000'} ],
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },
        
    ],
    room2: [
        { name: 'room2 name1' },
        21312313
        
    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },
        
    ],
    
};


results = [];

const getPeople = (obj) => {
    if ((obj instanceof Array) || (obj instanceof Object)) {
        for (let key in obj) {
            getPeople(obj[key])
        }
    }
    else {    
        results.push(obj);
}
    return results;
};





console.log(getPeople(rooms));