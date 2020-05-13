const getPeople = (obj) => {
    results = []
    return unflatten(obj, results);
    };
    
const unflatten = (obj, results) => {
    if ((obj instanceof Array) || (obj instanceof Object)) {
        for (i in obj) {
            unflatten(obj[i], results)
    }
    } else {
        results.push(obj);
    }
    return results;
};