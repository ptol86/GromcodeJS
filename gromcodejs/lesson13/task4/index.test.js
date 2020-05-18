import { calc } from './calculator.js';

it('should return null if type of input isnt a string', () => {
    const result = calc(12);
        expect(result).toEqual(null);
});
it('should get sum of numbers', () => {
    const result = calc(`8 + 4`);
        expect(result).toEqual(`8 + 4 = 12`);
});

it('should get subtraction of numbers', () => {
    const result = calc(`2 - 3`);
    expect(result).toEqual(`2 - 3 = -1`);
});
it('should get multiplication of numbers', () => {
    const result = calc(`2 * 3`);
    expect(result).toEqual('2 * 3 = 6');
});

it('should return division', () => {
    let result = calc('6 / 2');

    expect(result).toEqual('6 / 2 = 3');
});