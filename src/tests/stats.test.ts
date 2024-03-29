import { average, sum } from "../stats";
import * as statsAsync from "../statsAsync";

describe("Stats should", ()=> {
    it("Calculates the sum of all elements of the array", () => {
        const result = sum([1,2,3]);
        const expected= 6;
        expect(result).toBe(expected)
    })
    
    it("Calculates the average of all elements of the array", () => {
        const result = average([1,2,3]);
        const expected = 2;    
        expect(result).toBe(expected)
    })
})

describe("Stats async should", ()=> {
    it("Calculates the sum of all elements of the array (async)", async () => {
        const result = await statsAsync.sum([1,2,3]);
        const expected= 6;
        expect(result).toBe(expected)
    })
    
    it("Calculates the average of all elements of the array (async)", async () => {
        const result = await statsAsync.average([1,2,3]);
        const expected = 2;    
        expect(result).toBe(expected)
    })
})