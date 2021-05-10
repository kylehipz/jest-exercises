const sum = require('./sum');

test('properly adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
