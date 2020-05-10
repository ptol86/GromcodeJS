function getMessagesForBestStudents(a, b) {
        let bestStudents = a
        .filter(name => !b.includes(name))  

        return bestStudents.map(name => `Good job, ${name}`);
}




// (['a', 'b', 'c', 'd']) 

        let [first, second] =  ['b', 'd'];
        console.log(...({321: 123}, {2323: 2323}));