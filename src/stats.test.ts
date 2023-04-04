import { expect } from "./testLib";
import { average, sum } from "./stats";

let result: number, expected: number;

result = sum([1,2,3]);
expected = 6;

expect(expected).toBe(result)

result = average([1,2,3]);
expected = 2;

expect(expected).toBe(result)

