
import { createCalculator, calc1, calc2 } from './index';

it('should add digit to memory digit', () => {
    const result = calc1.add(25);
    expect(result).toEqual(25);
});
it('should  subtract from memory digit another digit', () => {
    const result = calc1.decrease(10);
    expect(result).toEqual(15);
});
it('should reset memory digit', () => {
    const result = calc1.reset();
    expect(result).toEqual(0);
});
it('should return memory digit', () => {
    const result = calc1.getMemo();
    expect(result).toEqual(0);
});
it('should add digit to memory digit', () => {
    const result = calc2.add(30);
    expect(result).toEqual(30);
});
it('should  subtract from memory digit another digit', () => {
    const result = calc2.decrease(35);
    expect(result).toEqual(-5);
});
it('should reset memory digit', () => {
    const result = calc2.reset();
    expect(result).toEqual(0);
});
it('should return memory digit', () => {
    const result = calc2.getMemo();
    expect(result).toEqual(0);
});

