const { todoForm } = document.forms;

const Project = (name, list) => ({ name, list });

const List = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});

const Move = (item, array) => array.push(item);

const createTodo = () => {
  const title = todoForm.title.value;
  const description = todoForm.description.value;
  const dueDate = todoForm.date.value;
  const priority = todoForm.priority.value;
  return List(title, description, dueDate, priority);
};

export {
  Project, List, Move, createTodo,
};
