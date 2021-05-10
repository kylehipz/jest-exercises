const removeVowels = require('./remove-vowels');

test('Should remove all vowels from a text', () => {
  expect(removeVowels('Hello world')).toBe('Hll wrld');
});
