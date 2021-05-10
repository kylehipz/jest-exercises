jest.mock('./fetch-data');
const transformTitle = require('./transform');

test('transforms(removes the vowels) the title of the todo', async () => {
  const transformedTodo = await transformTitle();

  expect(transformedTodo).toStrictEqual({
    userId: 1,
    completed: true,
    id: 1,
    title: 'By grcrs'
  });
});
