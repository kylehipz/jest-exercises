const fetchData = () => {
  return Promise.resolve({
    userId: 1,
    id: 1,
    completed: true,
    title: 'Buy groceries'
  });
};

exports.fetchData = fetchData;
