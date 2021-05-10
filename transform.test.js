const transformTitle = require('./transform');

test('transforms(removes the vowels) the title of the todo', async () => {
  const transformedTodo = await transformTitle();
  expect(transformedTodo).toStrictEqual({
    userId: 1,
    completed: false,
    id: 1,
    title: 'dlcts t tm'
  });
});
