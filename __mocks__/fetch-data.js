const fetchData = () => {
  return Promise.resolve({
    userId: 1,
    id: 1,
    completed: true,
    title: 'By grcrs'
  });
};

exports.fetchData = fetchData;
