function getMessagesForBestStudents(a, b) {
        let bestStudents = a
        .filter(name => !b.includes(name))  

        return bestStudents.map(name => `Good job, ${name}`);
}




// (['a', 'b', 'c', 'd'])  ['b', 'd']