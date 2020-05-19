
import { makeCounter, counter1, counter2 } from './index';

it('should count first iteration', () => {
    const result = counter1();
    expect(result).toEqual(0);
});
it('should count second iteration', () => {
    const result = counter1();
    expect(result).toEqual(1);
});
it('should count third iteration', () => {
    const result = counter1();
    expect(result).toEqual(2);
});
it('should count first iteration', () => {
    const result = counter2();
    expect(result).toEqual(0);
});
it('should count second iteration', () => {
    const result = counter2();
    expect(result).toEqual(1);
});
it('should count third iteration', () => {
    const result = counter2();
    expect(result).toEqual(2);
});
