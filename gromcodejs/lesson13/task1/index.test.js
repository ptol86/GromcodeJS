import {getEvenNumbers} from "./index";

it("should get even numbers", () => {
    const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);

    expect(result).toEqual([2,4,6]);
});