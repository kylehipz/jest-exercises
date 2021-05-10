const isConsonant = (letter) => {
  return !['a', 'e', 'i', 'o', 'u'].includes(letter);
};

const removeVowels = (title) => {
  return title
    .split('')
    .filter((letter) => isConsonant(letter))
    .join('');
};

module.exports = removeVowels;
