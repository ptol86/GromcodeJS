import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should get squared minimal number', () => {
    const result = getMinSquaredNumber([5, -2, 3]);
    expect(result).toEqual(4);
});

it('should return null if array is empty', () => {
    const result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
});
it('should return null if array is not array', () => {
    const result = getMinSquaredNumber("123");
    expect(result).toEqual(null);
});

// it('should get sum of numbers', () => {
//     const result = getSum(8, 4);
//         expect(result).toEqual(12);
// });