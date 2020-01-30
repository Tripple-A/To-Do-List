const Project = (name, list) => ({ name, list });

const List = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});

const Move = (item, array) => array.push(item);
const Itemize = (array) => {
  array.forEach((element) => {
    return element.name;
  });
};
export {
  Project, List, Move, Itemize,
};
