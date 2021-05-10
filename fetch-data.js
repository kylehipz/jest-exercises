const fetch = require('node-fetch');

const fetchData = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => data[0])
    .catch((err) => console.log(err));
};

exports.fetchData = fetchData;
//module.exports = fetchData;
