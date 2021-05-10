const { fetchData } = require('./fetch-data');
const removeVowels = require('./remove-vowels');

const transformTitle = () => {
  return fetchData()
    .then((data) => {
      const { title } = data;

      return {
        ...data,
        title: removeVowels(title)
      };
    })
    .catch((err) => console.log(err));
};

//console.log(transformTitle().then(console.log));

module.exports = transformTitle;
