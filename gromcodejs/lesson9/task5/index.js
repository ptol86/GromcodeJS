
const rooms = {
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
    results = [];
    if (Object.keys(obj).length === 0) {
        return results;
    }
    Object.values(obj).flat().forEach(el => {
        if (Object.values(el).length === 0) {
            return [];
        }
      results.push(Object.values(el).flat()[0]);
    });
    return results;
  };






console.log(getPeople(rooms));