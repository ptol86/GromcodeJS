import { filterNames, arrAverage, transaction, key, user, anotherKey } from './index.js';

// function  filterNames

it('should return array elements that includes text and which length > 5', () => {
    const result = filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya');
        expect(result).toEqual(['Olivya', 'Nastya']);
});
it('should return null if arr is not array', () => {
    const result = filterNames("1,2,3,4,5,6");
        expect(result).toEqual(null);
});
it('should return empty array if text not subject to condition', () => {
    const result = filterNames(['Yellow', 'Green', 'Brown', 'Black', 'Grey', 'White'], 're');
        expect(result).toEqual([]);
});

// function arrAverage

it('should get array average number', () => {
    const result = arrAverage([2, 5, 6, 3]);
        expect(result).toEqual(4);
});
it('should return null if arr is not array', () => {
    const result = arrAverage("1,2,3,4,5,6");
        expect(result).toEqual(null);
});
it('should get array average number', () => {
    const result = arrAverage([-1, -2, -3, -4, -5, -6]);
        expect(result).toEqual(-3.5);
});

// obj transaction

it('should return transaction currency', () => {
    const result = transaction.currency;
    expect(result).toEqual(`USD`);
});
it('should return transaction value', () => {
    const result = transaction.value;
    expect(result).toEqual(170);
});
it('should return  key value', () => {
    const result = transaction[key];
    expect(result).toEqual('sale');
});
it('should return transaction.agent["company"]', () => {
    const result = transaction.agent['company'];
    expect(result).toEqual(`NYSE`);
});
it('should return transaction.agent.country', () => {
    const result = transaction.agent.country;
    expect(result).toEqual(`Ukraine`);
});
it('should return operation time', () => {
    const result = transaction['operation time'];
    expect(result).toEqual(1584029990001);
});

// obj user

it(`'should assign a hobby property to an object with 'football' value using a point'`, () => {
    const result = user.hobby;
    expect(result).toEqual("football");
});
it(`should assign value of property anotherKey to false`, () => {
    const result = user[anotherKey];
    expect(result).toEqual(false);
});
it(`'should assign a favorite music property to an object with 'rock' value'`, () => {
    const result = user['favorite music'];
    expect(result).toEqual('rock');
});
it(`'should assign to obj user addres property with an obj with property country with Ukraine value `, () => {
    const result = user.address.country;
    expect(result).toEqual('Ukraine');
});
it(`'should assign to  addres property  building with 17 value `, () => {
    const result = user.address.building;
    expect(result).toEqual(17);
});




 
 