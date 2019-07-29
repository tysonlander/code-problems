const functions = require("./functions");

test("Add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Smash array ["hello", "world"] into string "hello world"', () => {
  expect(functions.smash(["hello", "world"])).toBe("hello world");
});

test('Smash array ["hello", "world"] NOT into string "helloworld"', () => {
  expect(functions.smash(["hello", "world"])).not.toBe("helloworld");
});

// Documentation
//toEqual, toBeLessThan, toBeLessThanOrEqual, toMatch, toContain
//

// Check for truthy & falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
