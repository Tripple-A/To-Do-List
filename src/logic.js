const { todoForm } = document.forms;
let mylist;

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

const saveForm = (listed) => {
  listed.title = todoForm.title.value;
  listed.description = todoForm.description.value;
  listed.dueDate = todoForm.date.value;
  listed.priority = todoForm.priority.value;
};

const store = () => {
  localStorage.setItem('savedData', JSON.stringify(mylist));
};

export {
  Project, List, Move, createTodo, saveForm, store,
};
