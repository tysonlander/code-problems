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

test('repeatStr return a string "mydog" 3 times', () => {
  expect(functions.repeatStr(3, "mydog")).toBe("mydogmydogmydog");
});

test("opposite return 5 when passed -5", () => {
  expect(functions.opposite(-5)).toBe(5);
});

test("opposite Does NOT return 5 when passed -5", () => {
  expect(functions.opposite(-5)).toBe(5);
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
