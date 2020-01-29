//import './style.css';

const Project = (name, list) => ({ name, list });

const List = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});

Player1 = Project('read',[])
list1 = List('buy house','save money', '23/6/9', 'low')
Player1.list.push(list1)

console.log(Player1.list)