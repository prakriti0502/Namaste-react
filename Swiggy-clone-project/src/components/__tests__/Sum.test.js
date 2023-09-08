import {Sum} from '../Sum';

test("Sum should add 2 numbers", () => {
    const res = Sum(3,4);
    expect(res).toBe(7); //assertion
})