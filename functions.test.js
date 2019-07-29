const functions = require('./functions');

test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
})

test('Smash array ["hello", "world"] into string "hello world"', () => {
  expect(functions.smash(['hello', 'world'])).toBe('hello world');
})