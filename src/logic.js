const Project = (name, list) => ({ name, list });

const List = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});

export { Project, List };
